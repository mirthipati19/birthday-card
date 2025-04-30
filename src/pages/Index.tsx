
import React, { useState, useEffect } from "react";
import { useCardAnimation } from "../hooks/useCardAnimation";
import BirthdayCard from "../components/BirthdayCard";
import ParticleBackground from "../components/ParticleBackground";
import { Link } from "react-router-dom";

const Index = () => {
  const recipientName = "My Love"; // Replace with the actual name
  const [isLoading, setIsLoading] = useState(true);
  const { isCardOpen, handleCardClick } = useCardAnimation();
  const [showLink, setShowLink] = useState(false);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Show the link after card is opened
  useEffect(() => {
    if (isCardOpen) {
      setTimeout(() => {
        setShowLink(true);
      }, 2000);
    }
  }, [isCardOpen]);

  if (isLoading) {
    return (
      <div className="loading-screen fixed inset-0 bg-birthday-dark flex justify-center items-center z-50">
        <div className="loading-content text-center">
          <h2 className="text-2xl mb-4">Loading your special gift...</h2>
          <div className="loader mx-auto w-12 h-12 border-4 border-birthday-medium border-t-birthday-gold rounded-full animate-spin-slow"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Background particles */}
      <ParticleBackground count={100} color="#ffd700" />
      
      {/* Audio control button */}
      <div className="fixed top-5 right-5 z-50">
        <button className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-colors">
          🎵
        </button>
      </div>
      
      {/* Birthday Card */}
      <BirthdayCard 
        recipientName={recipientName}
        onCardOpen={handleCardClick}
        isOpen={isCardOpen}
      />

      {/* Link to the second birthday page */}
      {showLink && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
          <Link 
            to="/birthday" 
            className="px-6 py-3 bg-birthday-gold hover:bg-birthday-gold/90 text-birthday-dark font-bold rounded-full shadow-lg transition-all hover:scale-105 flex items-center gap-2"
          >
            Continue to Next Surprise 
            <span className="text-xl">→</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Index;
