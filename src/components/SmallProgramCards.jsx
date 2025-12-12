import React from "react";
import talkIcon from "../assets/majesticons_chat-line.png";
import classIcon from "../assets/akar-icons_book.png";
import projectIcon from "../assets/mingcute_code-fill.png";
import mentorIcon from "../assets/octicon_people-24.png";

function SmallProgramCards() {
  const items = [
    {
      id: 1,
      title: "Career Talks",
      desc: "Sesi sharing dari praktisi industri dan alumni sukses.",
      icon: talkIcon,
      bg: "bg-yellow-200",
    },
    {
      id: 2,
      title: "Extra Classes",
      desc: "Kelas tambahan skill development dan workshop teknis.",
      icon: classIcon,
      bg: "bg-green-200",
    },
    {
      id: 3,
      title: "Project Work",
      desc: "Mengerjakan project nyata dengan bimbingan mentor.",
      icon: projectIcon,
      bg: "bg-blue-200",
    },
    {
      id: 4,
      title: "Mentoring",
      desc: "Sesi konsultasi personal dengan mentor berpengalaman.",
      icon: mentorIcon,
      bg: "bg-pink-200",
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {items.map((item) => (
            <div
              key={item.id}
              className={`${item.bg} rounded-xl p-6 shadow-sm text-center`}
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 h-16 mx-auto mb-4"
              />

              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SmallProgramCards;
