import { useEffect, useState } from "react";
import { ContentCard } from "../components/ContentCard";
import axiosClient from "../api/axiosClient";
import { ShieldQuestionMark } from "lucide-react";
export default function ContentListPage() {
  const [contentData, setContentData] = useState([]);
  useEffect(() => {
    axiosClient
      .get("/api/contents/me")
      .then((res) => {
        setContentData(res.data);
      })
      .catch(() => {
        alert("Error konten tidak bisa ditampilkan");
      });
  }, []);

  if (contentData.length < 1) {
    return (
      <div className="text-center pt-80">
        <ShieldQuestionMark className="w-20 h-20  mx-auto text-2xl font-semibold text-teal-600" />
        <h2 className="pt-6 text-2xl font-semibold text-zinc-700">
          Belum ada konten, buat dulu yuk!
        </h2>
      </div>
    );
  }
  return (
    <div className="pt-16 w-full flex flex-col gap-y-16 px-4 md:px-8">
      <div className="flex flex-col gap-y-3 w-full items-center">
        <h1 className="text-teal-600 font-bold text-2xl md:text-5xl">
          DAFTAR KONTEN DIY
        </h1>
        <span className="md:text-3xl text-teal-600 text-lg">
          Do It Yourself
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-296 w-full mx-auto gap-8">
        {contentData.map((content) => (
          <ContentCard
            id={content._id}
            key={content._id}
            title={content.title}
            category={content.category}
            creator={content.user}
            createdAt={content.createdAt.split("T")[0]}
            lastUpdated={content.updatedAt.split("T")[0]}
          />
        ))}
      </div>
    </div>
  );
}
