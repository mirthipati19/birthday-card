
import React, { useEffect, useState } from "react";
import { friendMessages } from "../data/memories";

const MessageSection: React.FC = () => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);

  // Stagger message appearance
  useEffect(() => {
    const messageIds = friendMessages.map((msg) => msg.id);
    
    const timer = setInterval(() => {
      setVisibleMessages((prev) => {
        if (prev.length < friendMessages.length) {
          return [...prev, messageIds[prev.length]];
        }
        clearInterval(timer);
        return prev;
      });
    }, 800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <h2 className="font-dancing text-4xl text-birthday-gold text-center mb-8">Messages From Loved Ones</h2>
      
      <div className="flex flex-col gap-5 max-h-80 md:max-h-96 overflow-y-auto p-2">
        {friendMessages.map((message) => (
          <div 
            key={message.id}
            className={`bg-white/20 backdrop-blur-md rounded-lg p-4 transition-all duration-500 ${
              visibleMessages.includes(message.id) ? 'opacity-100 animate-fade-in' : 'opacity-0 -translate-y-4'
            }`}
          >
            <h3 className="text-birthday-gold text-xl mb-2">{message.name}</h3>
            <p>{message.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageSection;
