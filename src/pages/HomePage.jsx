import { Hammer, HandCoins, HandFist, Leaf } from "lucide-react";
import wave from "/wave-1.png";
export default function HomePage() {
  return (
    <div className="pt-16 w-full flex flex-col gap-y-16">
      <div className="flex flex-col gap-y-3 px-4 md:px-8 w-full items-center">
        <span className="text-zinc-400 font-semibold md:text-xl">
          KARANG TARUNA
        </span>
        <h1 className="font-bold text-2xl text-teal-600 md:text-5xl">
          KARYA MUDA SOLUTIF
        </h1>
        <h2 className="text-lg md:text-3xl text-teal-600">
          "Kreatif, Solutif, Berkarya untuk Bangsa"
        </h2>
      </div>
      <div>
        <img className="w-full" src={wave} alt="Wave Ornament" />
        <div className="text-teal-50 bg-teal-600 py-16 px-4 md:px-8 text-center flex flex-col items-center gap-y-3">
          <h3 className="text-3xl font-bold">Tentang Kami</h3>
          <p className="max-w-270 w-full text-lg font-semibold md:text-xl">
            Karang Taruna “Karya Muda Solutif” merupakan organisasi kepemudaan
            di wilayah Kelurahan Sentra Jaya yang berdiri sebagai wadah
            pengembangan kreativitas, keterampilan, dan kemandirian pemuda
            perkotaan.
            <br />
            Fokus utama kami adalah pelatihan DIY (Do It Yourself) dan
            pertukangan modern seperti woodworking, perbaikan rumah ringan,
            serta pembuatan furniture kreatif yang bernilai ekonomis
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-3 px-4 md:px-8">
        <h3 className="text-3xl text-center text-teal-600 font-bold">
          Detail Organisasi
        </h3>
        <div className="text-zinc-700 text-lg md:text-xl flex flex-col">
          <span>📍 Jl. Sentra Kreatif No. 88, Kota Nusantara</span>
          <span className="text-zinc-700 text-lg">
            👥 Anggota Aktif: 30+ Pemuda
          </span>
          <span className="text-zinc-700 text-lg">
            📅 Berdiri: 10 Maret 2021
          </span>
          <div className="text-zinc-700 text-lg">
            🛠 Fokus Utama:
            <span className="block">
              Pelatihan DIY pertukangan kayu & besi Workshop
            </span>
            <span className="block">
              instalasi listrik dasar Proyek renovasi fasilitas umum
            </span>
            <span className="block">Pemberdayaan usaha kreatif pemuda</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 px-4 md:px-8 text-center max-w-162.5 m-auto w-full">
        <h3 className="text-3xl text-teal-600 font-bold">Visi</h3>
        <p className="text-lg text-zinc-700 md:text-xl">
          Menjadi komunitas pemuda perkotaan yang kreatif, mandiri, dan
          produktif melalui pengembangan keterampilan DIY dan pertukangan.
        </p>
      </div>
      <div className="px-4 md:px-8 flex flex-col gap-y-3 max-w-2xl mx-auto w-full">
        <h3 className="text-3xl text-center text-teal-600 font-bold">Misi</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-60 rounded-xl text-teal-50 px-3 flex flex-col justify-center text-center items-center bg-teal-600 gap-y-3">
            <Hammer className="w-18 h-18" />
            <span className="text-lg font-semibold">
              Melatih dan meningkatkan skill pertukangan.
            </span>
          </div>
          <div className="h-60 rounded-xl text-teal-50 px-3 flex flex-col justify-center text-center items-center bg-teal-600 gap-y-3">
            <HandCoins className="w-18 h-18" />
            <span className="text-lg font-semibold">
              Menciptakan karya bernilai ekonomi.
            </span>
          </div>
          <div className="h-60 rounded-xl text-teal-50 px-3 flex flex-col justify-center text-center items-center bg-teal-600 gap-y-3">
            <Leaf className="w-18 h-18" />
            <span className="text-lg font-semibold">
              Memberi dampak nyata bagi lingkungan.
            </span>
          </div>
          <div className="h-60 rounded-xl text-teal-50 px-3 flex flex-col justify-center text-center items-center bg-teal-600 gap-y-3">
            <HandFist className="w-18 h-18" />
            <span className="text-lg font-semibold">
              Menguatkan solidaritas pemuda.
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 max-w-5xl w-full mx-auto">
        <h3 className="text-zinc-700 text-3xl text-center font-bold">
          Struktur Organisasi
        </h3>
        <div className="struktur-grid gap-8 px-4 md:px-8">
          <div className="rounded-xl text-teal-50 h-60 bg-zinc-700 px-3 flex flex-col justify-center items-center a">
            <span className="text-lg font-semibold">Andika Cirebon</span>
            <span>KETUA</span>
          </div>

          <div className="rounded-xl text-teal-50 h-60 bg-zinc-700 px-3 flex flex-col justify-center items-center b">
            <span className="text-lg font-semibold">Rizky Sore Hari</span>
            <span>WAKIL KETUA</span>
          </div>

          <div className="rounded-xl text-teal-50 h-60 bg-zinc-700 px-3 flex flex-col justify-center items-center c">
            <span className="text-lg font-semibold">Fajar Petang</span>
            <span>SEKRETARIS</span>
          </div>

          <div className="rounded-xl text-teal-50 h-60 bg-zinc-700 px-3 flex flex-col justify-center items-center d">
            <span className="text-lg font-semibold">Doni Jatim</span>
            <span>BENDAHARA</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 px-4 md:px-8 max-w-5xl w-full mx-auto">
        <h3 className="text-3xl text-center text-teal-600 font-bold">
          Galeri Kegiatan
        </h3>
        <div className="galeri-grid gap-8">
          <img
            className="a2 w-full h-60 md:h-full object-cover rounded-xl"
            src="https://picsum.photos/600/400?grayscale"
            alt="Galeri kegiatan 1"
          />

          <img
            className="b2 w-full h-60 md:h-full object-cover rounded-xl"
            src="https://picsum.photos/400/400?grayscale"
            alt="Galeri kegiatan 2"
          />

          <img
            className="c2 w-full h-60 md:h-full object-cover rounded-xl"
            src="https://picsum.photos/400/400?grayscale"
            alt="Galeri kegiatan 3"
          />

          <img
            className="d2 w-full h-60 md:h-full object-cover rounded-xl"
            src="https://picsum.photos/400/800?grayscale"
            alt="Galeri kegiatan 4"
          />
        </div>
      </div>
      <div className="flex items-center flex-col gap-y-3 px-4 md:px-8">
        <h3 className="text-3xl text-center text-teal-600 font-bold">
          Hubungi Kami
        </h3>
        <p className="text-zinc-700 text-lg md:text-xl">
          📍 Sekretariat: Balai Komunitas Sentra Jaya
          <br />
          📞 WhatsApp: 0838-XXXX-XXXX
          <br />
          📧 Email: info@karangtarunakarya.id
          <br />
          📱 Instagram: @karangtaruna.karyamuda
          <br />
          🌐 Website: www.karyamudasolutif.id
          <br />
          🕒 Workshop: Setiap Sabtu, 16.00 – 19.00 WIB
        </p>
      </div>
    </div>
  );
}
