import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MembersOnlyContentProps {
  onBack: () => void;
}

export function MembersOnlyContent({ onBack }: MembersOnlyContentProps) {
  const memberData = JSON.parse(localStorage.getItem('dogBeanMemberData') || '{}');
  
  const exclusiveEvents = [
    {
      title: "PUPPY SOCIAL SATURDAY",
      date: "EVERY SATURDAY",
      time: "10:00 AM - 12:00 PM",
      description: "Exclusive socialization time for puppies under 6 months",
      color: "bg-pink-300"
    },
    {
      title: "COFFEE CUPPING SESSION",
      date: "FIRST FRIDAY",
      time: "7:00 PM - 9:00 PM", 
      description: "Learn about different coffee origins with our expert baristas",
      color: "bg-yellow-300"
    },
    {
      title: "DOG TRAINING WORKSHOP",
      date: "THIRD SUNDAY",
      time: "2:00 PM - 4:00 PM",
      description: "Professional dog training tips and tricks",
      color: "bg-green-300"
    }
  ];

  const memberPhotos = [
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1535914191444-2a3b177956c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="bg-yellow-300 text-purple-800 px-4 py-2 border-4 border-purple-800 transform -rotate-1 hover:rotate-0 transition-transform duration-200 shadow-lg mb-8"
        >
          ← BACK TO HOME
        </button>

        {/* Welcome Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="bg-green-300 border-8 border-purple-800 p-6 sm:p-8 transform -rotate-2 inline-block shadow-2xl mb-6">
            <h1 className="text-4xl sm:text-6xl font-black text-purple-800">
              WELCOME MEMBER!
            </h1>
          </div>
          <div className="bg-pink-300 border-4 border-purple-800 p-4 transform rotate-1 inline-block shadow-xl">
            <p className="text-xl sm:text-2xl font-black text-purple-800">
              EXCLUSIVE CONTENT JUST FOR YOU
            </p>
          </div>
        </div>

        {/* Member Info */}
        <div className="bg-blue-200 border-6 border-purple-800 p-6 sm:p-8 transform rotate-1 shadow-xl mb-8">
          <div className="bg-orange-300 border-4 border-purple-800 p-4 transform -rotate-1 shadow-lg">
            <h2 className="text-2xl font-black text-purple-800 mb-4">YOUR MEMBERSHIP:</h2>
            <div className="grid sm:grid-cols-3 gap-4 text-purple-800 font-black">
              <div>STATUS: ACTIVE ✓</div>
              <div>PLAN: MONTHLY</div>
              <div>MEMBER SINCE: {new Date(memberData.createdAt || Date.now()).toLocaleDateString()}</div>
            </div>
          </div>
        </div>

        {/* Exclusive Events */}
        <div className="mb-12">
          <div className="bg-yellow-300 border-6 border-purple-800 p-4 sm:p-6 transform -rotate-1 inline-block shadow-xl mb-8">
            <h2 className="text-3xl sm:text-4xl font-black text-purple-800">
              EXCLUSIVE EVENTS
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {exclusiveEvents.map((event, index) => (
              <div
                key={index}
                className={`${event.color} border-6 border-purple-800 p-6 transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-1'} hover:rotate-0 transition-transform duration-300 shadow-xl`}
              >
                <h3 className="text-xl font-black text-purple-800 mb-3">{event.title}</h3>
                <div className="space-y-2 text-purple-800 font-black">
                  <p>📅 {event.date}</p>
                  <p>🕒 {event.time}</p>
                  <p className="text-sm leading-tight">{event.description}</p>
                </div>
                <button className="bg-white border-3 border-purple-800 px-4 py-2 text-purple-800 font-black transform rotate-1 shadow-md mt-4 hover:rotate-0 transition-transform">
                  RSVP NOW
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Member Photo Gallery */}
        <div className="mb-12">
          <div className="bg-purple-300 border-6 border-purple-800 p-4 sm:p-6 transform rotate-2 inline-block shadow-xl mb-8">
            <h2 className="text-3xl sm:text-4xl font-black text-purple-800">
              MEMBER MOMENTS
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {memberPhotos.map((photo, index) => (
              <div
                key={index}
                className={`bg-pink-300 border-4 border-purple-800 p-2 transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-2'} hover:rotate-0 transition-transform duration-300 shadow-lg`}
              >
                <ImageWithFallback
                  src={photo}
                  alt={`Member moment ${index + 1}`}
                  className="w-full h-32 sm:h-40 object-cover border-2 border-purple-800"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Member Perks */}
        <div className="bg-orange-200 border-8 border-purple-800 p-8 sm:p-12 transform -rotate-1 shadow-2xl">
          <div className="bg-green-300 border-4 border-purple-800 p-6 transform rotate-2 shadow-xl mb-6">
            <h2 className="text-3xl font-black text-purple-800 text-center">
              YOUR MEMBER PERKS
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-yellow-300 border-4 border-purple-800 p-4 transform rotate-1 shadow-lg">
              <h3 className="text-xl font-black text-purple-800 mb-2">20% OFF DRINKS</h3>
              <p className="text-purple-800 font-black text-sm">Show your member app for instant discounts!</p>
            </div>
            
            <div className="bg-pink-300 border-4 border-purple-800 p-4 transform -rotate-2 shadow-lg">
              <h3 className="text-xl font-black text-purple-800 mb-2">PRIORITY SEATING</h3>
              <p className="text-purple-800 font-black text-sm">Always get the best spots for you and your pup!</p>
            </div>

            <div className="bg-blue-300 border-4 border-purple-800 p-4 transform rotate-3 shadow-lg">
              <h3 className="text-xl font-black text-purple-800 mb-2">FREE DOG TREATS</h3>
              <p className="text-purple-800 font-black text-sm">Weekly treat allowance for your furry friend!</p>
            </div>
          </div>

          <div className="bg-white border-6 border-purple-800 p-6 transform -rotate-1 shadow-xl mt-8">
            <p className="text-center text-purple-800 font-black text-lg">
              🎉 THANK YOU FOR BEING PART OF THE DOG & BEAN FAMILY! 🎉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}