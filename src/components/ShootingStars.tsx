import { cn } from "@/lib/utils";

const ShootingStars = () => {
  return (
    <div className="shooting-stars-container fixed inset-0 pointer-events-none">
      <div className="shooting-star shooting-star-1" />
      <div className="shooting-star shooting-star-2" />
      <style jsx>{`
        .shooting-star {
          position: absolute;
          width: 150px;
          height: 2px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0) 100%
          );
          opacity: 0;
          transform: rotate(-45deg);
        }

        .shooting-star::before {
          content: "";
          position: absolute;
          left: 0;
          top: -1px;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.7);
        }

        .shooting-star-1 {
          top: 20%;
          left: 80%;
          animation: shooting-star-animation 3s ease-in-out infinite;
          animation-delay: 0s;
        }

        .shooting-star-2 {
          top: 5%;
          left: 65%;
          animation: shooting-star-animation 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        @keyframes shooting-star-animation {
          0% {
            transform: translateX(0) translateY(0) rotate(-45deg);
            opacity: 1;
          }

          100% {
            transform: translateX(-500px) translateY(500px) rotate(-45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ShootingStars;
 