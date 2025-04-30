
import React from "react";
import { memories, Memory } from "../data/memories";

interface MemoryCardProps {
  memory: Memory;
}

const MemoryCard: React.FC<MemoryCardProps> = ({ memory }) => {
  return (
    <div className="memory-card w-48 h-64 md:w-52 md:h-72 perspective-1000 cursor-pointer">
      <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180 rounded-xl shadow-lg">
        {/* Front side */}
        <div className="absolute w-full h-full rounded-xl overflow-hidden bg-birthday-light text-white backface-hidden">
          <img 
            src={memory.image} 
            alt={memory.title} 
            className="w-full h-3/5 object-cover"
          />
          <div className="p-3">
            <h3 className="text-lg font-bold">{memory.title}</h3>
            <p className="text-sm opacity-80">{memory.date}</p>
          </div>
        </div>
        
        {/* Back side */}
        <div className="absolute w-full h-full rounded-xl overflow-hidden bg-birthday-gold-light text-birthday-dark p-4 flex justify-center items-center text-center backface-hidden transform rotate-y-180">
          <p>{memory.description}</p>
        </div>
      </div>
    </div>
  );
};

const MemoryTimeline: React.FC = () => {
  return (
    <div className="w-full">
      <h2 className="font-dancing text-4xl text-birthday-gold text-center mb-8">Our Journey Together</h2>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {memories.map((memory) => (
          <MemoryCard key={memory.id} memory={memory} />
        ))}
      </div>
    </div>
  );
};

export default MemoryTimeline;
