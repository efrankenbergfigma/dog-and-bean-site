import React from 'react';

export function Hours() {
  const hours = [
    { day: "MONDAY", time: "7:00 AM - 8:00 PM", color: "bg-pink-300" },
    { day: "TUESDAY", time: "7:00 AM - 8:00 PM", color: "bg-yellow-300" },
    { day: "WEDNESDAY", time: "7:00 AM - 8:00 PM", color: "bg-green-300" },
    { day: "THURSDAY", time: "7:00 AM - 8:00 PM", color: "bg-blue-300" },
    { day: "FRIDAY", time: "7:00 AM - 9:00 PM", color: "bg-orange-300" },
    { day: "SATURDAY", time: "8:00 AM - 9:00 PM", color: "bg-purple-300" },
    { day: "SUNDAY", time: "8:00 AM - 7:00 PM", color: "bg-pink-300" }
  ];

  return (
    <section className="py-12 sm:py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <div className="bg-green-300 border-8 border-purple-800 p-4 sm:p-6 transform rotate-2 inline-block shadow-2xl">
            <h2 className="text-3xl sm:text-5xl font-black text-purple-800">
              HOURS
            </h2>
          </div>
          <div className="bg-orange-300 border-4 border-purple-800 p-3 sm:p-4 transform -rotate-1 inline-block mt-4 shadow-xl">
            <p className="text-lg sm:text-xl font-black text-purple-800">
              WE'RE OPEN FOR PAWS & COFFEE
            </p>
          </div>
        </div>

        <div className="bg-blue-200 border-8 border-purple-800 p-6 sm:p-12 transform -rotate-1 shadow-2xl">
          <div className="space-y-4 sm:space-y-6">
            {hours.map((schedule, index) => (
              <div
                key={index}
                className={`${schedule.color} border-4 border-purple-800 p-4 sm:p-6 transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} shadow-xl`}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-center sm:text-left">
                  <span className="text-xl sm:text-2xl font-black text-purple-800 mb-2 sm:mb-0">
                    {schedule.day}
                  </span>
                  <span className="text-lg sm:text-xl font-black text-purple-800">
                    {schedule.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-300 border-6 border-purple-800 p-4 sm:p-6 transform rotate-2 mt-6 sm:mt-8 shadow-xl">
            <p className="text-center text-lg sm:text-xl font-black text-purple-800">
              📍 MEMBERS ONLY • BRING YOUR FURRY FRIEND • ☕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}