import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axiosClient from "../api/axiosClient";
import DOMPurify from "dompurify";
export default function ContentDetailPage() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  function getYoutubeEmbedUrl(url) {
    if (!url) return "";

    const videoIdMatch =
      url.match(/v=([^&]+)/) || url.match(/youtu\.be\/([^?]+)/);

    const videoId = videoIdMatch ? videoIdMatch[1] : null;

    if (!videoId) return "";

    return `https://www.youtube.com/embed/${videoId}`;
  }

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const { data } = await axiosClient.get(`/api/contents/${id}`);
        setContent(data);
      } catch {
        alert("Gagal mengambil data konten");
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [id]);
  function handleNavigate() {
    navigate("/contents/edit/" + content._id);
  }
  if (loading) {
    return (
      <div className="text-center pt-20 animate-pulse text-zinc-700 font-semibold">
        Loading...
      </div>
    );
  }

  if (!content) {
    return (
      <div className="text-center pt-20 text-red-600 font-semibold">
        Konten tidak ditemukan
      </div>
    );
  }

  return (
    <div className="px-4 md:px-8">
      <div className="py-13 flex flex-col gap-y-3 px-4 md:px-8 w-full items-center text-center">
        <h1 className="text-teal-600 font-semibold text-2xl md:text-3xl">
          {content.title}
        </h1>
        <span className="text-2xl text-teal-600 font-light">
          {content.category}
        </span>
        <button
          onClick={handleNavigate}
          type="button"
          className="bg-teal-600 font-semibold py-3.5 px-4 rounded-lg text-white cursor-pointer"
        >
          Edit Content
        </button>
      </div>

      <div className="flex flex-col gap-y-8 justify-center items-center">
        <iframe
          className="max-w-5xl w-full h-60 md:h-100 lg:h-134.5"
          src={getYoutubeEmbedUrl(content.video)}
          title="YouTube video player"
          allowFullScreen
        ></iframe>

        <div className="flex flex-col gap-y-8 max-w-5xl w-full text-lg text-zinc-700">
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(content.description),
            }}
          />
          <div>
            Category: {content.category}
            <br />
            Created At: {content.createdAt?.split("T")[0]}
            <br />
            Updated At: {content.updatedAt?.split("T")[0]}
          </div>

          <div>
            Creator
            <br />
            Nama: {content.user?.name}
            <br />
            Email: {content.user?.email}
          </div>
        </div>
      </div>
    </div>
  );
}
