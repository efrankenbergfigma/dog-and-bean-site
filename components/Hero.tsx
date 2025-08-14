import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onJoinClick?: () => void;
}

export function Hero({ onJoinClick }: HeroProps) {
  return (
    <section className="pt-20 sm:pt-24 pb-12 sm:pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-purple-800 leading-none">
                <span className="block bg-yellow-300 px-4 py-2 border-8 border-purple-800 transform -rotate-2 inline-block mb-4 shadow-xl">
                  DOG &
                </span>
                <span className="block bg-pink-300 px-4 py-2 border-8 border-purple-800 transform rotate-1 inline-block shadow-xl">
                  BEAN
                </span>
                <span className="block bg-green-300 px-4 py-2 border-8 border-purple-800 transform -rotate-1 inline-block mt-4 shadow-xl">
                  CLUB
                </span>
              </h1>
            </div>
            
            <div className="bg-orange-200 border-6 border-purple-800 p-6 sm:p-8 transform rotate-1 shadow-2xl">
              <p className="text-xl sm:text-2xl lg:text-3xl font-black text-purple-800 leading-tight">
                WHERE COFFEE MEETS COMMUNITY & EVERY DOG IS WELCOME
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onJoinClick}
                className="bg-pink-400 text-purple-800 px-6 sm:px-8 py-3 sm:py-4 border-6 border-purple-800 text-lg sm:text-xl font-black transform -rotate-1 hover:rotate-0 transition-transform duration-200 shadow-xl hover:shadow-2xl"
              >
                BECOME A MEMBER
              </button>
              <button className="bg-yellow-400 text-purple-800 px-6 sm:px-8 py-3 sm:py-4 border-6 border-purple-800 text-lg sm:text-xl font-black transform rotate-2 hover:rotate-0 transition-transform duration-200 shadow-xl hover:shadow-2xl">
                VIEW MENU
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-blue-200 border-8 border-purple-800 transform -rotate-3 shadow-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dog-friendly café interior with cozy seating and coffee bar"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-green-400 border-4 border-purple-800 px-4 py-2 transform rotate-12 shadow-xl">
              <span className="text-purple-800 font-black text-sm sm:text-base">WOOF!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}