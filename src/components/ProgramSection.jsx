import React from "react";
import calendarIcon from "../assets/lucide_calendar.png";
import clockIcon from "../assets/Frame24.png"

function ProgramSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900">
          Jadwal & <span className="text-blue-600">Program Kegiatan</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mt-3 text-sm">
          Program terstruktur yang dirancang untuk mengoptimalkan 
          pembelajaran dan pengembangan skill setiap Sabtu
        </p>

        {/* Wrapper Card */}
        <div className="bg-white shadow-xl rounded-3xl p-10 mt-14">
          
          {/* Header "Setiap Sabtu" */}
          <div className="flex justify-center items-center gap-2 mb-10">
            <img src={calendarIcon} className="w-5 h-5" alt="calendar" />
            <span className="text-gray-700 font-medium">Setiap Sabtu</span>
          </div>

          {/* 2 Session Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Sesi Pagi */}
            <div className="rounded-2xl p-6 shadow-md bg-gradient-to-r from-green-200 to-yellow-100">
              <p className="text-sm font-semibold text-gray-700 mb-1">Sesi Pagi</p>

              <div className="flex items-center gap-3 mb-2">
                <img src={clockIcon} className="w-6 h-6" alt="icon" />
                <p className="font-semibold text-gray-800">
                  09.00 – 12.00 WIB
                </p>
              </div>

              <p className="text-gray-700 text-sm">
                Workshop, Career Talks, dan Extra Classes Intensif
              </p>
            </div>

            {/* Sesi Sore */}
            <div className="rounded-2xl p-6 shadow-md bg-gradient-to-r from-green-200 to-yellow-100">
              <p className="text-sm font-semibold text-gray-700 mb-1">Sesi Sore</p>

              <div className="flex items-center gap-3 mb-2">
                <img src={clockIcon} className="w-6 h-6" alt="icon" />
                <p className="font-semibold text-gray-800">
                  16.00 – 19.00 WIB
                </p>
              </div>

              <p className="text-gray-700 text-sm">
                Project Work, Mentoring, dan Collaboration Session
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default ProgramSection;
