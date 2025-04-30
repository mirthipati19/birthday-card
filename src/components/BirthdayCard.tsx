
import React, { useEffect, useState } from "react";

interface BirthdayCardProps {
  recipientName: string;
  onCardOpen: () => void;
  isOpen: boolean;
}

const BirthdayCard: React.FC<BirthdayCardProps> = ({ recipientName, onCardOpen, isOpen }) => {
  const [sparkles, setSparkles] = useState<JSX.Element[]>([]);

  // Create sparkles effect
  useEffect(() => {
    const newSparkles = [];
    for (let i = 0; i < 50; i++) {
      const delay = Math.random() * 2;
      const size = Math.random() * 4 + 1;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      
      newSparkles.push(
        <div
          key={i}
          className="absolute rounded-full bg-birthday-gold animate-sparkle"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            top: `${top}%`,
            animationDelay: `${delay}s`
          }}
        />
      );
    }
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="card-container w-full h-screen flex justify-center items-center">
      <div 
        className={`card w-4/5 max-w-xl h-3/4 relative cursor-pointer ${isOpen ? 'open' : ''}`}
        onClick={onCardOpen}
      >
        {/* Front of the card */}
        <div className="card-front absolute w-full h-full rounded-xl shadow-2xl overflow-hidden border-2 border-birthday-gold">
          <div className="bg-gradient-to-br from-birthday-medium to-birthday-light w-full h-full flex justify-center items-center">
            <div className="text-center px-5">
              <h1 className="title font-dancing text-5xl md:text-6xl text-birthday-gold mb-6 text-shadow">Happy Birthday</h1>
              <h2 className="name font-dancing text-3xl md:text-4xl text-white mb-8">{recipientName}</h2>
              <div className="sparkles relative w-full h-full pointer-events-none">
                {sparkles}
              </div>
              <p className="open-prompt text-white opacity-80 mt-12 animate-pulse">Click to open</p>
            </div>
          </div>
        </div>

        {/* Inside of the card */}
        <div className="card-inside absolute w-full h-full rounded-xl shadow-2xl overflow-hidden bg-gradient-to-br from-birthday-gold-light to-white text-birthday-dark p-8 flex justify-center items-center">
          <div className="intro-message text-center">
            <h2 className="font-dancing text-3xl md:text-4xl text-birthday-dark mb-6">To My Amazing Girlfriend</h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Today is all about celebrating the most wonderful person I know...
              <br /><br />
              You make every moment special, and I'm so grateful to have you in my life.
              <br /><br />
              Happy Birthday, My Love! ❤️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;
