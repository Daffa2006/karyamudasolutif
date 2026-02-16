import { FormInput } from "../components/FormInput";
import { CategorySelect } from "../components/CategorySelect";
import { useNavigate } from "react-router";
import Editor from "react-simple-wysiwyg";
import { useState } from "react";
import axiosClient from "../api/axiosClient";

export default function ContentCreatePage() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    video: "",
  });
  const isDisabled =
    !formData.title.trim() ||
    !formData.video.trim() ||
    !formData.category.trim() ||
    !formData.description.trim();
  const handleSubmitContent = async (e) => {
    e.preventDefault();

    try {
      await axiosClient.post("/api/contents", formData);

      const done = window.confirm(
        "Konten berhasil disubmit, kembali ke halaman konten yang telah anda buat?",
      );

      if (done) {
        navigate("/contents/me");
      }
    } catch (err) {
      setErrors(err?.response?.data?.errors || {});
    }
  };

  return (
    <div className="px-4 md:px-8 flex flex-col items-center">
      <div className="py-13 flex flex-col gap-y-3 px-4 md:px-8 w-full max-w-5xl items-center text-center">
        <h1 className="text-teal-600 font-semibold text-2xl md:text-3xl">
          SHARE KONTEN ANDA 🚀
        </h1>
        <span className="text-2xl text-teal-600 font-light">
          Semuanya wajib diisi!
        </span>
      </div>

      <form
        onSubmit={handleSubmitContent}
        className="py-8 flex flex-col gap-y-6 max-w-5xl w-full"
      >
        <FormInput
          label="Judul"
          name="title"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Masukkan judul konten"
          error={errors.title}
          required
        />

        <FormInput
          label="Link Video Youtube"
          name="video"
          onChange={(e) => setFormData({ ...formData, video: e.target.value })}
          placeholder="Masukkan link youtube"
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
          disabled={isDisabled}
          className={`font-semibold py-3.5 px-4 rounded-lg text-white transition
    ${
      isDisabled
        ? "bg-zinc-400 cursor-not-allowed"
        : "bg-teal-600 hover:bg-teal-700"
    }`}
        >
          Submit Konten
        </button>
      </form>
    </div>
  );
}
