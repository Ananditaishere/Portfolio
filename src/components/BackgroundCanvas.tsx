import React, { useEffect, useRef } from 'react';

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Create background stars
    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.2 + 0.3,
      alpha: Math.random() * 0.6 + 0.1,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.0005 + 0.0002,
    }));

    // Glowing Orbs
    const orbs = [
      { x: 0.2, y: 0.3, radius: 0.35, color: '139, 92, 246', speed: 0.0003 },
      { x: 0.8, y: 0.7, radius: 0.3, color: '34, 211, 238', speed: 0.0002 },
      { x: 0.5, y: 0.2, radius: 0.25, color: '236, 72, 153', speed: 0.0004 },
    ];

    let t = 0;

    const render = () => {
      t++;
      ctx.clearRect(0, 0, width, height);

      // Render Orbs
      orbs.forEach((orb) => {
        const px = (orb.x + Math.sin(t * orb.speed) * 0.08) * width;
        const py = (orb.y + Math.cos(t * orb.speed * 1.3) * 0.06) * height;
        const radiusPx = orb.radius * Math.min(width, height);

        const gradient = ctx.createRadialGradient(px, py, 0, px, py, radiusPx);
        gradient.addColorStop(0, `rgba(${orb.color}, 0.12)`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      });

      // Render Stars
      stars.forEach((star) => {
        const a = star.alpha * (0.5 + 0.5 * Math.sin(t * star.speed * 60 + star.phase));
        ctx.beginPath();
        ctx.arc(star.x * width, star.y * height, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${a})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};
