import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaHome, FaRobot, FaLinkedin } from "react-icons/fa";

const funnyAIMessages = [
  "Ups! Wygląda na to, że nasz model AI miał chwilowy hallucynację...",
  "Error 404: Model nie poradził sobie ze znalezieniem strony.",
  "Sztuczna Inteligencja nie może znaleźć tej strony.",
  "Ta strona została zjedzona przez głodny algorytm.",
  "Ups! Chyba transformer się transformował nie w tę stronę.",
];

const NotFound = () => {
  const location = useLocation();
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Log the 404 error
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Randomly select a funny message
    const randomMessage = funnyAIMessages[Math.floor(Math.random() * funnyAIMessages.length)];
    setMessage(randomMessage);
  }, [location.pathname]);

  return (
    <div className="min-h-screen tech-pattern flex items-center justify-center">
      <div className="max-w-2xl w-full mx-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-[#56FF8F]/30 p-8 text-center">
          <div className="flex justify-center mb-6">
            <FaRobot className="text-[#56FF8F] text-7xl" />
          </div>
          
          <h1 className="text-6xl font-bold mb-4 text-white">
            4<span className="text-[#56FF8F]">0</span>4
          </h1>
          
          <p className="text-xl text-white/80 mb-8">
            {message}
          </p>
          
          <p className="text-base text-white/60 mb-6">
            Szukałeś strony: <span className="text-[#56FF8F]">{location.pathname}</span>
          </p>

          <div className="space-y-4">
            <a
              href="/"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#56FF8F] text-black font-medium rounded-lg hover:bg-[#56FF8F]/80 transition-all duration-300"
            >
              <FaHome className="text-xl" />
              Wróć na stronę główną
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
