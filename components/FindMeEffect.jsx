import { useEffect, useRef, useState } from "react";

export default function FindMeEffect() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const smooth = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const particles = useRef([]);

  /* Detect theme change */
  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setEnabled(theme === "find-me");
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  /* Main Effect */
  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Add pixel fire particles
      particles.current.push({
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 6 + 4,
        life: 1,
        speedY: Math.random() * -2 - 1,
        speedX: (Math.random() - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMove);

    const render = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.12;
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.12;

      const x = smooth.current.x;
      const y = smooth.current.y;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      /* 🔥 Glow */
      const gradient = ctx.createRadialGradient(x, y, 1, x, y, 60);
      gradient.addColorStop(0, "rgba(255,200,0,0.9)");
      gradient.addColorStop(0.3, "rgba(255,120,0,0.6)");
      gradient.addColorStop(0.6, "rgba(255,60,0,0.3)");
      gradient.addColorStop(1, "rgba(0,0,0,0)");

      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, 60, 0, Math.PI * 2);
      ctx.fill();

      /* 🧱 Minecraft Pixel Fire */
      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];

        ctx.fillStyle =
          p.life > 0.6
            ? `rgba(255,200,0,${p.life})`
            : `rgba(255,80,0,${p.life})`;

        ctx.fillRect(
          Math.floor(p.x),
          Math.floor(p.y),
          p.size,
          p.size
        );

        p.x += p.speedX;
        p.y += p.speedY;
        p.life -= 0.03;

        if (p.life <= 0) {
          particles.current.splice(i, 1);
        }
      }

      /* 🔦 Spotlight Reveal */
      const radius = 180;
      document.body.style.background = "black";
      document.body.style.maskImage =
        `radial-gradient(circle ${radius}px at ${x}px ${y}px, white 0%, transparent 100%)`;
      document.body.style.webkitMaskImage =
        `radial-gradient(circle ${radius}px at ${x}px ${y}px, white 0%, transparent 100%)`;

      animationRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);

      document.body.style.maskImage = "";
      document.body.style.webkitMaskImage = "";
      document.body.style.background = "";

      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}