"use client";
import { useEffect, useState } from "react";

export const TextGenerateEffect = ({ words }: { words: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + words[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150); // Adjust speed of typing here

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, words]);

  return (
    <div className="text-gray-400">
      {displayedText}
      {currentIndex < words.length && (
        <span className="animate-blink inline-block w-[4px] h-[60px] md:h-[80px] lg:h-[120px] bg-gray-400 ml-1" />
      )}
    </div>
  );
};
