import React from "react";
import logo from "../assets/_1371346167104.png";
import imageIcon from "../assets/_1371346169856.png";
import locationIcon from "../assets/location.png";
import emailIcon from "../assets/email.png";
import teleponIcon from "../assets/telpon.png";

function FooterSection() {
  return (
    <footer className="w-full bg-[#0B4C97] text-white pt-12 pb-6 mt-10 border-t-4 border-[#1E90FF]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Logo + Deskripsi + Kontak */}
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="logo" className="w-10 h-10" />
            <img src={imageIcon} alt="image" className="w-15 h-15" />
          </div>

          {/* Deskripsi */}
          <p className="text-gray-200 text-sm mb-4 max-w-xs leading-relaxed">
            Wadah kreatif dan kompetitif untuk mahasiswa yang ingin
            mengembangkan potensi melalui ideation, creation, 
            collaboration, dan guidance.
          </p>

          {/* Lokasi */}
          <div className="flex items-start gap-3 mb-3">
            <img src={locationIcon} alt="location" className="w-9 h-9 mt-1" />
            <p className="text-gray-200 text-sm max-w-xs leading-relaxed">
              Jl. Ringroad Selatan, Kragilan, Tamanan, Kec. Banguntapan, Bantul,
              Daerah Istimewa Yogyakarta 55191
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 mb-3">
            <img src={emailIcon} alt="email" className="w-5 h-3 mt-3" />
            <p className="text-gray-200 text-sm">ruang_ekspresi@webmail.uad.ac.id</p>
          </div>

          {/* Telepon */}
          <div className="flex items-center gap-3 mt-3">
            <img src={teleponIcon} alt="telpon" className="w-5 h-5" />
            <p className="text-gray-200 text-sm">(0274) 511830</p>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-gray-200 text-sm">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Program</li>
            <li className="hover:underline cursor-pointer">Projects</li>
            <li className="hover:underline cursor-pointer">Testimonials</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Programs</h3>
          <ul className="flex flex-col gap-2 text-gray-200 text-sm">
            <li className="hover:underline cursor-pointer">Career Talks</li>
            <li className="hover:underline cursor-pointer">Extra Classes</li>
            <li className="hover:underline cursor-pointer">Project Work</li>
            <li className="hover:underline cursor-pointer">Mentoring</li>
          </ul>
        </div>
      </div>

      {/* Garis Bawah */}
      <div className="border-t border-[#1E90FF] mt-10"></div>

      <p className="text-center text-gray-200 text-xs mt-4">
        © {new Date().getFullYear()} Ruang Ekspresi | All Rights Reserved
      </p>
    </footer>
  );
}

export default FooterSection;