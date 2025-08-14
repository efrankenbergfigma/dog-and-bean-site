import React, { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  size: number;
  color: string;
  shape: string;
  speed: number;
  rotationSpeed: number;
}

export function ConfettiBackground() {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  const colors = [
    'bg-pink-400',
    'bg-yellow-400',
    'bg-green-400',
    'bg-blue-400',
    'bg-orange-400',
    'bg-purple-400'
  ];

  const shapes = ['square', 'circle', 'triangle'];

  useEffect(() => {
    const pieces: ConfettiPiece[] = [];
    for (let i = 0; i < 50; i++) {
      pieces.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 360,
        size: Math.random() * 12 + 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        speed: Math.random() * 2 + 1,
        rotationSpeed: Math.random() * 4 + 1
      });
    }
    setConfetti(pieces);

    const interval = setInterval(() => {
      setConfetti(prev => prev.map(piece => ({
        ...piece,
        y: (piece.y + piece.speed) % 110,
        rotation: (piece.rotation + piece.rotationSpeed) % 360,
        x: piece.y > 100 ? Math.random() * 100 : piece.x
      })));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {confetti.map(piece => (
        <div
          key={piece.id}
          className={`absolute ${piece.color} opacity-80`}
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            transform: `rotate(${piece.rotation}deg)`,
            borderRadius: piece.shape === 'circle' ? '50%' : piece.shape === 'triangle' ? '0' : '0',
            clipPath: piece.shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none'
          }}
        />
      ))}
      
      {/* Static decorative elements */}
      <div className="absolute top-10 left-10 bg-pink-400 w-16 h-16 border-4 border-purple-800 transform rotate-45 opacity-60"></div>
      <div className="absolute top-20 right-20 bg-yellow-400 w-12 h-12 rounded-full border-4 border-purple-800 opacity-60"></div>
      <div className="absolute bottom-20 left-20 bg-green-400 w-20 h-20 border-4 border-purple-800 transform -rotate-12 opacity-60"></div>
      <div className="absolute bottom-10 right-10 bg-blue-400 w-14 h-14 border-4 border-purple-800 transform rotate-12 opacity-60"></div>
      <div className="absolute top-1/2 left-5 bg-orange-400 w-10 h-10 border-4 border-purple-800 transform rotate-45 opacity-60"></div>
      <div className="absolute top-1/3 right-5 bg-purple-400 w-12 h-12 rounded-full border-4 border-purple-800 opacity-60"></div>
    </div>
  );
}