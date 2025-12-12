import React from "react";
import g1 from "../assets/Frame138.png";
import g2 from "../assets/Frame138.png";
import g3 from "../assets/Frame138.png";
import g4 from "../assets/Frame138.png";
import g5 from "../assets/Frame138.png";
import g6 from "../assets/Frame138.png";

function CardGallery() {
  const items = [
    {
      id: 1,
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      text: "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain.",
      image: g1,
    },
    {
      id: 2,
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      text: "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain.",
      image: g2,
    },
    {
      id: 3,
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      text: "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain.",
      image: g3,
    },
    {
      id: 4,
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      text: "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain.",
      image: g4,
    },
    {
      id: 5,
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      text: "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain.",
      image: g5,
    },
    {
      id: 6,
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      text: "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain.",
      image: g6,
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900">
          Kata <span className="text-blue-600">Mereka</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm mt-3 mb-12">
          Dengarkan pengalaman dari mahasiswa yang telah bergabung dengan Ruang Ekspresi
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-xl p-6 text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-blue-600 text-sm">{item.role}</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CardGallery;
