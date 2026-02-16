import { FilePenLine, Trash2 } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import axiosClient from "../api/axiosClient";

export function ContentCard({
  id,
  title,
  category,
  creator,
  createdAt,
  lastUpdated,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const isMyContentPage = location.pathname === "/contents/me";

  function formatCategory(text) {
    if (!text) return "";
    return text
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  function handleDetail() {
    navigate("/contents/" + id);
  }

  function handleEdit(e) {
    e.stopPropagation();
    navigate("/contents/edit/" + id);
  }

  async function handleDelete(e) {
    e.stopPropagation();

    const confirmed = window.confirm(
      "Apakah anda yakin ingin menghapus konten ini?",
    );

    if (!confirmed) return;

    try {
      await axiosClient.delete(`/api/contents/${id}`);

      alert("Konten berhasil dihapus");

      window.location.reload();
    } catch {
      alert("Gagal menghapus konten");
    }
  }

  return (
    <div
      onClick={handleDetail}
      className="flex flex-col justify-between h-75 border-zinc-200 border p-5 rounded-xl cursor-pointer hover:shadow-md transition"
    >
      <div className="flex flex-col gap-y-3">
        <h5 className="text-2xl font-bold text-zinc-700">{title}</h5>
        <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-teal-500 text-teal-50 w-max">
          {formatCategory(category)}
        </span>
      </div>

      <div className="flex md:flex-row flex-col gap-y-3 justify-between text-sm">
        <div className="font-medium flex flex-col">
          <span className="text-zinc-400">Creator</span>
          <span className="text-zinc-700">{creator?.name}</span>
        </div>

        <div className="font-medium flex flex-col">
          <span className="text-zinc-400">Created At</span>
          <span className="text-zinc-700">{createdAt}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="font-semibold text-zinc-400 text-sm">
          Updated at {lastUpdated}
        </span>

        {isMyContentPage && (
          <div className="flex gap-x-2">
            <Trash2
              onClick={handleDelete}
              className="cursor-pointer text-red-700 w-8 h-8"
            />
            <FilePenLine
              onClick={handleEdit}
              className="cursor-pointer text-teal-700 w-8 h-8"
            />
          </div>
        )}
      </div>
    </div>
  );
}
