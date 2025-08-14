import React from 'react';

interface NavigationProps {
  onMembershipClick: () => void;
  onMembersOnlyClick?: () => void;
  isMember: boolean;
}

export function Navigation({ onMembershipClick, onMembersOnlyClick, isMember }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-orange-200 border-b-8 border-purple-400 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-black text-purple-800 transform -rotate-1">
              DOG & BEAN
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#menu" className="bg-pink-300 text-purple-800 px-4 py-2 border-4 border-purple-800 transform rotate-1 hover:rotate-0 transition-transform duration-200 shadow-lg">
                MENU
              </a>
              <a href="#events" className="bg-yellow-300 text-purple-800 px-4 py-2 border-4 border-purple-800 transform -rotate-1 hover:rotate-0 transition-transform duration-200 shadow-lg">
                EVENTS
              </a>
              {isMember && onMembersOnlyClick ? (
                <button 
                  onClick={onMembersOnlyClick}
                  className="bg-blue-300 text-purple-800 px-4 py-2 border-4 border-purple-800 transform rotate-2 hover:rotate-0 transition-transform duration-200 shadow-lg"
                >
                  MEMBERS AREA
                </button>
              ) : (
                <button 
                  onClick={onMembershipClick}
                  className="bg-green-300 text-purple-800 px-4 py-2 border-4 border-purple-800 transform rotate-2 hover:rotate-0 transition-transform duration-200 shadow-lg"
                >
                  JOIN US
                </button>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={isMember && onMembersOnlyClick ? onMembersOnlyClick : onMembershipClick}
              className="bg-pink-300 text-purple-800 px-3 py-2 border-4 border-purple-800 transform rotate-3 hover:rotate-0 transition-transform duration-200"
            >
              {isMember ? 'MEMBERS' : 'JOIN'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}