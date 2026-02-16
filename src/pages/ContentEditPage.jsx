import { FormInput } from "../components/FormInput";
import { CategorySelect } from "../components/CategorySelect";
import { useNavigate, useParams } from "react-router";
import Editor from "react-simple-wysiwyg";
import { useState, useEffect, useMemo } from "react";
import axiosClient from "../api/axiosClient";

export default function ContentEditPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    video: "",
  });

  const [initialData, setInitialData] = useState(null);

  // 🔹 Fetch old data saat pertama render
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const { data } = await axiosClient.get(`/api/contents/${id}`);

        const cleaned = {
          title: data.title || "",
          category: data.category || "",
          description: data.description || "",
          video: data.video || "",
        };

        setFormData(cleaned);
        setInitialData(cleaned);
      } catch {
        alert("Gagal mengambil data konten");
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [id]);

  // 🔹 Cek apakah ada perubahan
  const isUnchanged = useMemo(() => {
    if (!initialData) return true;

    return (
      formData.title === initialData.title &&
      formData.category === initialData.category &&
      formData.description === initialData.description &&
      formData.video === initialData.video
    );
  }, [formData, initialData]);

  const handleSubmitContent = async (e) => {
    e.preventDefault();

    try {
      await axiosClient.put(`/api/contents/${id}`, formData);

      const done = window.confirm(
        "Konten berhasil diperbarui, kembali ke halaman konten anda?",
      );

      if (done) {
        navigate("/contents/me");
      }
    } catch (err) {
      setErrors(err?.response?.data?.errors || {});
    }
  };

  if (loading) {
    return <div className="text-center pt-20">Loading...</div>;
  }

  return (
    <div className="px-4 md:px-8 flex flex-col items-center">
      <div className="py-13 flex flex-col gap-y-3 px-4 md:px-8 w-full max-w-5xl items-center text-center">
        <h1 className="text-teal-600 font-semibold text-2xl md:text-3xl">
          EDIT KONTEN ✏️
        </h1>
      </div>

      <form
        onSubmit={handleSubmitContent}
        className="py-8 flex flex-col gap-y-6 max-w-5xl w-full"
      >
        <FormInput
          label="Judul"
          name="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          error={errors.title}
          required
        />

        <FormInput
          label="Link Video Youtube"
          name="video"
          value={formData.video}
          onChange={(e) => setFormData({ ...formData, video: e.target.value })}
          error={errors.video}
          required
        />

        <CategorySelect
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          error={errors.category}
          required
        />

        <div>
          <label className="mb-3" htmlFor="description">
            Description
          </label>
          <Editor
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          disabled={isUnchanged}
          className={`font-semibold py-3.5 px-4 rounded-lg text-white transition ${
            isUnchanged
              ? "bg-zinc-400 cursor-not-allowed"
              : "bg-teal-600 hover:bg-teal-700"
          }`}
        >
          Update Konten
        </button>
      </form>
    </div>
  );
}
