
import React, { useState } from "react";
import { gifts, Gift } from "../data/memories";

interface GiftBoxItemProps {
  gift: Gift;
}

const GiftBoxItem: React.FC<GiftBoxItemProps> = ({ gift }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className="relative w-36 h-36 md:w-40 md:h-40 perspective-1000 cursor-pointer"
      onClick={handleClick}
    >
      {/* Bottom of the gift box */}
      <div className="absolute w-full h-full bg-gradient-to-br from-birthday-light to-birthday-medium border-2 border-birthday-gold rounded-md" />
      
      {/* Top of the gift box */}
      <div 
        className={`absolute w-full h-1/3 bg-gradient-to-br from-birthday-gold to-birthday-gold-light border-2 border-birthday-gold rounded-md transition-transform duration-500 origin-top ${
          isOpen ? 'transform -rotate-x-120' : ''
        }`}
      />
      
      {/* Ribbon */}
      <div className="absolute top-0 left-1/2 w-4 h-full bg-birthday-gold transform -translate-x-1/2" />
      <div className="absolute top-1/3 left-0 w-full h-4 bg-birthday-gold" />
      
      {/* Gift content */}
      <div 
        className={`absolute top-0 left-0 w-full h-full flex justify-center items-center p-3 text-center text-white transition-opacity duration-300 ${
          isOpen ? 'opacity-100 delay-300' : 'opacity-0'
        }`}
      >
        <p>{gift.description}</p>
      </div>
    </div>
  );
};

const GiftBox: React.FC = () => {
  return (
    <div className="w-full">
      <h2 className="font-dancing text-4xl text-birthday-gold text-center mb-8">Special Gifts for You</h2>
      <div className="flex flex-wrap justify-center gap-10 p-4">
        {gifts.map((gift) => (
          <GiftBoxItem key={gift.id} gift={gift} />
        ))}
      </div>
    </div>
  );
};

export default GiftBox;
