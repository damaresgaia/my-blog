import { useEffect, useRef } from "react";
import ShootingStars from "./ShootingStars";

interface SpaceBackgroundProps {
  children: React.ReactNode;
}

const SpaceBackground = ({ children }: SpaceBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Limpar estrelas existentes
    const existingStars = container.querySelectorAll(".star");
    existingStars.forEach((star) => star.remove());

    // Criar novas estrelas
    const starCount = Math.min(
      Math.floor((containerWidth * containerHeight) / 3000),
      200
    );

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random();
      const delay = Math.random() * 5;

      star.className = `star twinkle ${
        size > 0.8 ? "star-large" : size > 0.5 ? "star-medium" : ""
      }`;
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.setProperty("--delay", delay.toString());

      container.appendChild(star);
    }

    // Adicionar alguns planetas/elementos espaciais para decoração
    const addPlanetDecoration = (
      className: string,
      size: string,
      left: string,
      top: string,
      animDelay: string = "0s"
    ) => {
      const planet = document.createElement("div");
      planet.className = className;
      planet.style.width = size;
      planet.style.height = size;
      planet.style.left = left;
      planet.style.top = top;
      planet.style.position = "absolute";
      planet.style.borderRadius = "50%";
      planet.style.animation = `float 8s ease-in-out infinite`;
      planet.style.animationDelay = animDelay;
      planet.style.opacity = "0.6";
      planet.style.zIndex = "1";
      container.appendChild(planet);
    };

    // Adicionar alguns elementos decorativos
    addPlanetDecoration("bg-planet-purple", "80px", "5%", "70%", "0s");
    addPlanetDecoration("bg-planet-blue", "120px", "85%", "20%", "2s");
    addPlanetDecoration("bg-planet-pink", "60px", "75%", "80%", "1s");
  }, []);

  return (
    <div className="space-background" ref={containerRef}>
      <ShootingStars />
      {children}
    </div>
  );
};

export default SpaceBackground;
