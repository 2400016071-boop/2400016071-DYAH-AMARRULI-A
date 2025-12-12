import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import frameImage from "../assets/Frame4.png";
import BudiImage from "../assets/Frame25.png";   // FIXED path

function ShowcaseProjects() {
  const projects = [
    {
      id: 1,
      category: "UI/UX Design",
      title: "Creative Portofolio Platform",
      desc: "Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas.",
      team: [
        "Budi Santoso - Frontend Developer",
        "Budi Santoso - Frontend Developer",
        "Budi Santoso - Frontend Developer",
      ],
      image: frameImage,
      demo: "#",
    },
    {
      id: 2,
      category: "UI/UX Design",
      title: "Creative Portfolio Platform",
      desc: "Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas.",
      team: [
        "Budi Santoso - Frontend Developer",
        "Budi Santoso - Frontend Developer",
        "Budi Santoso - Frontend Developer",
      ],
      image: frameImage,
      demo: "#",
    },
    {
      id: 3,
      category: "Mobile Development",
      title: "Creative Portfolio Platform",
      desc: "Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas.",
      team: [
        "Budi Santoso - Frontend Developer",
        "Budi Santoso - Frontend Developer",
        "Budi Santoso - Frontend Developer",
      ],
      image: frameImage,
      demo: "#",
    },
  ];

  // STATE SLIDER
  const [index, setIndex] = useState(0);

  // NEXT SLIDE
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  // PREV SLIDE
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // DATA YANG DITAMPILKAN
  const item = projects[index];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900">
            Showcase <span className="text-blue-600">Student Projects</span>
          </h2>
          <p className="text-gray-600 mt-3 text-sm">
            Karya-karya inovatif yang telah dihasilkan oleh mahasiswa dalam program Ruang Ekspresi
          </p>
        </div>

        {/* CARD */}
        <div className="bg-pink-50 rounded-3xl p-10 shadow-md relative flex flex-col lg:flex-row gap-10">

          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* LEFT CONTENT */}
          <div className="flex-1">
            <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              {item.category}
            </span>

            <h3 className="text-2xl font-bold mt-4 text-gray-900">
              {item.title}
            </h3>

            <p className="text-gray-700 mt-2 text-sm leading-relaxed">
              {item.desc}
            </p>

            {/* TEAM SECTION */}
            <div className="mt-6">
              <p className="font-semibold text-gray-800">Tim Pembuat :</p>

              <ul className="mt-3 space-y-3">
                {item.team.map((t, i) => (
                  <li key={i} className="flex items-center gap-3">
                    {/* Foto bulat kecil */}
                    <img
                      src={BudiImage}
                      alt="team member"
                      className="w-8 h-8 rounded-full object-cover border border-gray-300"
                    />
                    <p className="text-gray-700 text-sm">{t}</p>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={item.demo}
              className="mt-6 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
            >
              Live Demo
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={item.image}
              alt={item.title}
              className="w-full max-w-md rounded-2xl border-4 border-pink-200 shadow-md object-cover"
            />
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full hover:bg-gray-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>
      </div>
    </section>
  );
}

export default ShowcaseProjects;
