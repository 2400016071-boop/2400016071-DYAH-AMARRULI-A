import React from "react";
import heroImage from "../assets/Frame4.png";

function HeroSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT SIDE */}
        <div>
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold leading-snug text-gray-900">
            <span className="text-blue-800">RUANG EKSPRESI : </span>
            <span className="">Wadah</span> <br />
             kreatif & Kompetitif <br />
             Mahasiswa
         </h1>


          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-yellow-200 text-gray-800 font-medium rounded-full">
              Ideation
            </span>

            <span className="px-4 py-2 bg-green-200 text-gray-800 font-medium rounded-full">
              Creation
            </span>

            <span className="px-4 py-2 bg-blue-200 text-gray-800 font-medium rounded-full">
              Collaboration
            </span>

            <span className="px-4 py-2 bg-pink-200 text-gray-800 font-medium rounded-full">
              Guidance & Support
            </span>
          </div>
        </div>

        {/* RIGHT IMAGE SIDE */}
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full max-w-md rounded-2xl object-cover shadow-md"
          />
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
