
import { useState } from "react";

export const useCardAnimation = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleCardClick = () => {
    if (!isCardOpen) {
      setIsCardOpen(true);
    }
  };

  return {
    isCardOpen,
    handleCardClick
  };
};
