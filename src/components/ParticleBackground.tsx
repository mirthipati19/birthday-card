
import React, { useEffect, useRef } from "react";

interface ParticleProps {
  count?: number;
  color?: string;
}

const ParticleBackground: React.FC<ParticleProps> = ({ count = 50, color = "#ffd700" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.5
      });
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.fillStyle = color || "#ffd700";
        ctx.globalAlpha = particle.opacity;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0;
        else if (particle.x < 0) particle.x = canvas.width;

        if (particle.y > canvas.height) particle.y = 0;
        else if (particle.y < 0) particle.y = canvas.height;
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [count, color]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ParticleBackground;
