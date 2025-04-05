
import React, { useEffect, useState } from 'react';

interface ConfettiPiece {
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
  speed: number;
}

interface ConfettiEffectProps {
  active: boolean;
}

const COLORS = ['#FF7F50', '#8A2BE2', '#D8BFD8', '#FFD700', '#00CED1'];

const ConfettiEffect: React.FC<ConfettiEffectProps> = ({ active }) => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (active) {
      const pieces = Array(100).fill(0).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 30 - 30, // Start above the viewport
        size: Math.random() * 10 + 5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        rotation: Math.random() * 360,
        speed: Math.random() * 3 + 1,
      }));
      
      setConfetti(pieces);
      
      // Clear confetti after animation ends
      const timeout = setTimeout(() => {
        setConfetti([]);
      }, 4000);
      
      return () => clearTimeout(timeout);
    }
  }, [active]);

  if (!active || confetti.length === 0) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      {confetti.map((piece, i) => (
        <div 
          key={i}
          className="absolute rounded-sm"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            animation: `fall ${5 / piece.speed}s linear forwards`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(${Math.random() * 1000}deg);
          }
        }
      `}</style>
    </div>
  );
};

export default ConfettiEffect;
