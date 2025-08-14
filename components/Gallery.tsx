import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Cozy café interior with comfortable seating",
      color: "bg-pink-300",
      rotation: "rotate-2"
    },
    {
      src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Professional coffee bar setup",
      color: "bg-yellow-300",
      rotation: "-rotate-1"
    },
    {
      src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Happy dogs socializing in café",
      color: "bg-green-300",
      rotation: "rotate-3"
    },
    {
      src: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Exterior view of the café",
      color: "bg-blue-300",
      rotation: "-rotate-2"
    },
    {
      src: "https://images.unsplash.com/photo-1535914191444-2a3b177956c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Members enjoying coffee with their dogs",
      color: "bg-orange-300",
      rotation: "rotate-1"
    },
    {
      src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Specialty coffee drinks and treats",
      color: "bg-purple-300",
      rotation: "-rotate-3"
    }
  ];

  return (
    <section className="py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <div className="bg-yellow-300 border-8 border-purple-800 p-4 sm:p-6 transform -rotate-2 inline-block shadow-2xl">
            <h2 className="text-3xl sm:text-5xl font-black text-purple-800">
              GALLERY
            </h2>
          </div>
          <div className="bg-pink-300 border-4 border-purple-800 p-3 sm:p-4 transform rotate-1 inline-block mt-4 shadow-xl">
            <p className="text-lg sm:text-xl font-black text-purple-800">
              PEEK INSIDE OUR SPACE
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.color} border-6 sm:border-8 border-purple-800 p-2 sm:p-4 transform ${image.rotation} hover:rotate-0 transition-transform duration-300 shadow-xl hover:shadow-2xl`}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-48 sm:h-64 object-cover border-4 border-purple-800"
              />
              <div className="bg-white border-4 border-purple-800 p-2 mt-2 sm:mt-4 transform -rotate-1 shadow-md">
                <p className="text-purple-800 font-black text-xs sm:text-sm text-center">
                  {image.alt.toUpperCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}