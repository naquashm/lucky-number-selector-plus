
import React, { useRef, useEffect } from 'react';
import { Entry } from '@/components/NumberPickerForm';

interface WheelCanvasProps {
  entries: Entry[];
  spinning: boolean;
  onSpinComplete: (winner: Entry) => void;
}

const WheelCanvas: React.FC<WheelCanvasProps> = ({ entries, spinning, onSpinComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentRotationRef = useRef(0);
  const targetRotationRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const colors = ['#FF7F50', '#8A2BE2', '#D8BFD8', '#FFD700', '#00CED1', '#FF6B6B', '#4CAF50', '#9C27B0'];
  
  // Draw wheel function
  const drawWheel = (ctx: CanvasRenderingContext2D, rotation: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 * 0.9;
    
    ctx.clearRect(0, 0, width, height);
    
    // Draw wheel segments
    const totalEntries = entries.length;
    const arcSize = (2 * Math.PI) / totalEntries;
    
    for (let i = 0; i < totalEntries; i++) {
      const angle = i * arcSize;
      const colorIndex = i % colors.length;
      
      // Draw segment
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, angle + rotation, angle + arcSize + rotation);
      ctx.lineTo(centerX, centerY);
      ctx.fillStyle = colors[colorIndex];
      ctx.fill();
      ctx.stroke();
      
      // Draw text
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle + arcSize / 2 + rotation);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 16px sans-serif';
      
      const displayText = entries[i].name 
        ? `${entries[i].number} - ${entries[i].name}` 
        : `${entries[i].number}`;
        
      const textMaxWidth = radius * 0.8;
      // Truncate text if needed
      ctx.fillText(
        displayText.length > 12 ? displayText.substring(0, 12) + '...' : displayText, 
        radius * 0.8, 
        5
      );
      ctx.restore();
    }
    
    // Draw center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
    
    // Draw pointer
    ctx.beginPath();
    ctx.moveTo(centerX + radius + 15, centerY);
    ctx.lineTo(centerX + radius - 15, centerY - 15);
    ctx.lineTo(centerX + radius - 15, centerY + 15);
    ctx.closePath();
    ctx.fillStyle = "#333";
    ctx.fill();
  };
  
  // Spin animation
  const animate = () => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    // Easing towards target
    const distance = targetRotationRef.current - currentRotationRef.current;
    currentRotationRef.current += distance * 0.05;
    
    drawWheel(ctx, currentRotationRef.current);
    
    // Stop animation when close enough to target
    if (Math.abs(distance) > 0.001) {
      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
      // Determine winner
      const normalizedRotation = currentRotationRef.current % (2 * Math.PI);
      const segmentSize = (2 * Math.PI) / entries.length;
      // Wheel pointer is at top, need to calculate which segment is there
      let winnerIndex = Math.floor(
        (2 * Math.PI - (normalizedRotation % (2 * Math.PI))) / segmentSize
      ) % entries.length;
      
      if (winnerIndex >= entries.length) {
        winnerIndex = 0;
      }
      
      onSpinComplete(entries[winnerIndex]);
    }
  };
  
  // Initialize wheel
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      const size = Math.min(window.innerWidth * 0.8, window.innerHeight * 0.6);
      canvas.width = size;
      canvas.height = size;
      drawWheel(ctx, currentRotationRef.current);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [entries]);
  
  // Handle spinning
  useEffect(() => {
    if (spinning) {
      // Random spins (5-10 full rotations) plus a random segment
      targetRotationRef.current = currentRotationRef.current + 
        (Math.PI * 2 * (5 + Math.random() * 5)) + 
        (Math.random() * Math.PI * 2);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    }
  }, [spinning]);
  
  return (
    <div className="flex justify-center items-center w-full">
      <canvas 
        ref={canvasRef} 
        className="max-w-full border-4 border-gray-200 rounded-full shadow-lg"
      />
    </div>
  );
};

export default WheelCanvas;
