'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const ProfileImage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Reset animation when hover is removed
  useEffect(() => {
    if (isHovered) {
      console.log('Hover started - animation should begin');
      let progress = 0;
      const interval = setInterval(() => {
        progress += 2; // Increment by 2% every 40ms
        setAnimationProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          setAnimationCompleted(true);
          console.log('Animation completed - changing image');
        }
      }, 20); // 20ms * 50 = 1000ms total
      intervalRef.current = interval;
    } else {
      console.log('Hover ended - resetting');
      // Clear intervals and reset state when not hovering
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setAnimationCompleted(false);
      setAnimationProgress(0);
    }

    // Cleanup on unmount
    return () => {
      const currentTimeout = timeoutRef.current;
      const currentInterval = intervalRef.current;
      if (currentTimeout) {
        clearTimeout(currentTimeout);
      }
      if (currentInterval) {
        clearInterval(currentInterval);
      }
    };
  }, [isHovered]);

  // Calculate border style based on animation progress
  // Calculate border style based on animation progress
// Calculate border style based on animation progress (Ultra-smooth version)
const getBorderStyle = () => {
  const angle = (animationProgress / 100) * 370;
  
  return {
    position: 'absolute' as const,
    top: '-4px',
    left: '-4px',
    width: 'calc(100% + 8px)',
    height: 'calc(100% + 8px)',
    borderRadius: '100%',
    // Ultra-smooth gradient with multiple transition points
    background: `conic-gradient(from 0deg, 
      #6366f1 0deg, 
      #6366f1 ${Math.max(0, angle - 8)}deg,
      #6366f1dd ${Math.max(0, angle - 4)}deg,
      #6366f199 ${angle}deg,
      #6366f144 ${angle + 2}deg,
      transparent ${angle + 5}deg, 
      transparent 360deg)`,
    // Very soft mask with extended transition
    mask: 'radial-gradient(circle, transparent 58%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.5) 62%, black 65%)',
    WebkitMask: 'radial-gradient(circle, transparent 58%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.5) 62%, black 65%)',
    // Subtle blur for perfect anti-aliasing
    filter: 'blur(0.3px)',
    zIndex: 20,
    pointerEvents: 'none' as const,
  };
};

  return (
    <div 
      className="relative flex h-20 w-20 items-center justify-center rounded-full overflow-visible"
      onMouseEnter={() => {
        console.log('Mouse entered');
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        console.log('Mouse left');
        setIsHovered(false);
      }}
      style={{
        position: 'relative',
        zIndex: 1
      }}
    >
      {/* Animated border */}
      {isHovered && animationProgress > 0 && (
        <div style={getBorderStyle()} />
      )}
      
      {/* Display different image based on animation state */}
      <div className="relative h-full w-full overflow-hidden rounded-full">
        {animationCompleted ? (
          <Image 
            src="/images/Profile.jpg"
            alt="Alternative profile" 
            fill
            sizes="80px"
            className="object-cover"
          />
        ) : (
          <Image 
            src="/images/Profile-alt.jpg" 
            alt="Profile" 
            fill
            sizes="80px"
            className="object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default ProfileImage;
