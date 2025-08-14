import React from 'react';

export function Introduction() {
  return (
    <section className="py-12 sm:py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-pink-200 border-8 border-purple-800 p-6 sm:p-12 transform -rotate-1 shadow-2xl">
          <div className="bg-yellow-300 border-4 border-purple-800 p-4 sm:p-6 transform rotate-2 mb-6 sm:mb-8 shadow-xl">
            <h2 className="text-2xl sm:text-4xl font-black text-purple-800 text-center">
              OUR MISSION
            </h2>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <p className="text-lg sm:text-xl text-purple-800 leading-relaxed">
              <span className="bg-green-300 px-2 py-1 border-2 border-purple-800 transform rotate-1 inline-block mr-2 shadow-md">
                Dog & Bean Club
              </span>
              is more than just a café – it's a vibrant community space where dog lovers unite over exceptional specialty coffee and meaningful connections.
            </p>
            
            <p className="text-lg sm:text-xl text-purple-800 leading-relaxed">
              Our members-only environment creates a safe, welcoming space for both humans and their four-legged companions to socialize, relax, and enjoy carefully crafted beverages in a uniquely dog-friendly atmosphere.
            </p>
            
            <div className="bg-orange-300 border-4 border-purple-800 p-4 sm:p-6 transform -rotate-1 shadow-xl">
              <p className="text-lg sm:text-xl font-black text-purple-800 text-center">
                SPECIALTY COFFEE • DOG-FRIENDLY SPACE • EXCLUSIVE EVENTS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}