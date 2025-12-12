import React from "react";
import idea from "../assets/lets-icons_lamp-light.png";
import create from "../assets/lucide_wrench.png";
import collab from "../assets/octicon_people-24.png";
import guide from "../assets/simple-line-icons_graduation.png";

function PillarsSection() {
  
  const pillars = [
    {
      id: 1,
      title: "Ideation",
      desc: "Mengembangkan ide-ide kreatif dan inovatif melalui brainstorming dan workshop ideation yang terarah.",
      image: idea,
      bg: "bg-yellow-200",
    },
    {
      id: 2,
      title: "Creation",
      desc: "Mewujudkan ide menjadi karya nyata dengan dukungan tools dan teknologi terkini.",
      image: create,
      bg: "bg-green-200",
    },
    {
      id: 3,
      title: "Collaboration",
      desc: "Bekerja sama dalam tim multidisiplin untuk menciptakan solusi yang komprehensif.",
      image: collab,
      bg: "bg-blue-200",
    },
    {
      id: 4,
      title: "Guidance & Support",
      desc: "Mendapat bimbingan dari mentor berpengalaman dan akses ke berbagai resources pembelajaran.",
      image: guide,
      bg: "bg-pink-200",
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Empat Pilar <span className="text-blue-600">Ruang Ekspresi</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mt-3 text-sm md:text-base max-w-xl mx-auto">
          komprehensif yang dirancang untuk mengembangkan potensi kreatif mahasiswa melalui pendekatan holistik
        </p>

        {/* Pilar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {pillars.map((item) => (
            <div 
              key={item.id}
              className={`${item.bg} rounded-xl p-6 shadow-sm text-center`}
            >
              <img 
                src={item.image}
                alt={item.title}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default PillarsSection;
