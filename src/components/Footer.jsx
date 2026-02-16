import wave from "/wave-1.png";
export default function Footer() {
  return (
    <footer>
      <img className="w-full" src={wave} alt="Wave Ornament" />
      <div className="text-center text-teal-50 py-8 font-medium text-sm px-3 md:px-8 bg-teal-600">
        © 2026 Karang Taruna Karya Muda Solutif – Kelurahan Sentra Jaya, Kota
        Nusantara Kreatif • Solutif • Berkarya untuk Bangsa
      </div>
    </footer>
  );
}
