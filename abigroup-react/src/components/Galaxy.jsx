import { useEffect, useRef } from 'react';

const Galaxy = ({ 
  starCount = 200,
  nebulaColors = ['#667eea', '#764ba2', '#f093fb', '#c0c0c0'],
  animationSpeed = 0.5,
  interactiveStars = true 
}) => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize stars
    starsRef.current = Array.from({ length: starCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 1000,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.1,
      opacity: 1,
      twinkleSpeed: Math.random() * 0.02 + 0.01,
      color: nebulaColors[Math.floor(Math.random() * nebulaColors.length)]
    }));

    // Animation loop
    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw nebula gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height)
      );
      
      gradient.addColorStop(0, 'rgba(102, 126, 234, 0.1)');
      gradient.addColorStop(0.3, 'rgba(118, 75, 162, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and animate stars
      starsRef.current.forEach((star) => {
        // Update star
        star.z -= star.speed * animationSpeed;
        star.opacity += Math.sin(time * star.twinkleSpeed) * 0.1;
        
        if (star.z <= 0) {
          star.z = 1000;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }

        // Calculate position
        const x = (star.x - canvas.width / 2) * (1000 / star.z) + canvas.width / 2;
        const y = (star.y - canvas.height / 2) * (1000 / star.z) + canvas.height / 2;
        const size = (1 - star.z / 1000) * star.size;

        // Draw star
        if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
          ctx.save();
          ctx.globalAlpha = Math.max(0, Math.min(1, star.opacity));
          
          // Star glow
          const starGradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3);
          starGradient.addColorStop(0, star.color);
          starGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          
          ctx.fillStyle = starGradient;
          ctx.beginPath();
          ctx.arc(x, y, size * 2, 0, Math.PI * 2);
          ctx.fill();
          
          // Star core
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.restore();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [starCount, nebulaColors, animationSpeed]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default Galaxy;