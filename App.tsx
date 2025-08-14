import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Gallery } from './components/Gallery';
import { Hours } from './components/Hours';
import { Navigation } from './components/Navigation';
import { ConfettiBackground } from './components/ConfettiBackground';
import { MembershipPage } from './components/MembershipPage';
import { MembersOnlyContent } from './components/MembersOnlyContent';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMember, setIsMember] = useState(false);

  useEffect(() => {
    // Check if user is a member (using localStorage for demo)
    const memberStatus = localStorage.getItem('dogBeanMember');
    setIsMember(memberStatus === 'true');
  }, []);

  const handleMembershipSuccess = () => {
    setIsMember(true);
    localStorage.setItem('dogBeanMember', 'true');
    setCurrentPage('members-only');
  };

  if (currentPage === 'membership') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-50 to-blue-100 relative overflow-hidden">
        <ConfettiBackground />
        <MembershipPage 
          onBack={() => setCurrentPage('home')} 
          onSuccess={handleMembershipSuccess}
        />
      </div>
    );
  }

  if (currentPage === 'members-only' && isMember) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-50 to-blue-100 relative overflow-hidden">
        <ConfettiBackground />
        <MembersOnlyContent onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-50 to-blue-100 relative overflow-hidden">
      <ConfettiBackground />
      <Navigation 
        onMembershipClick={() => setCurrentPage('membership')}
        onMembersOnlyClick={isMember ? () => setCurrentPage('members-only') : undefined}
        isMember={isMember}
      />
      <main>
        <Hero onJoinClick={() => setCurrentPage('membership')} />
        <Introduction />
        <Gallery />
        <Hours />
      </main>
    </div>
  );
}