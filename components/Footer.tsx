// src/components/Footer.tsx
"use client"; // <-- Add this line at the top

import React from "react";
import AnimatedText from "@/components/ui/animatedtext";

const Footer: React.FC = () => {
  return (
    <footer className="max-w-7xl mx-auto">
        {/* Middle Section: Brand Name (Animated) */}
        <div className="text-center my-16 md:my-24">
          <AnimatedText
            text="OpenAbir"
            el="h1"
            className="font-bold tracking-tighter  text-7xl md:text-8xl mb-0 pd-0"
          />
          <hr className="border-t border-gray-700 mt-[-10px] pt-0" />
        </div>
    </footer>
  );
};

export default Footer;
