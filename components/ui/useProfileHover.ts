'use client';

import { useState, useEffect, useRef } from 'react';

export const useProfileHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovered) {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 2;
        setAnimationProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          setAnimationCompleted(true);
        }
      }, 20);
      intervalRef.current = interval;
    } else {
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

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  const getBorderStyle = () => {
    const angle = (animationProgress / 100) * 370;
    return {
      position: 'absolute' as const,
      top: '-4px',
      left: '-4px',
      width: 'calc(100% + 8px)',
      height: 'calc(100% + 8px)',
      borderRadius: '100%',
      background: `conic-gradient(from 0deg, 
        #0AC500 0deg, 
        #0AC500 ${Math.max(0, angle - 8)}deg,
        #0AC500dd ${Math.max(0, angle - 4)}deg,
        #0AC50099 ${angle}deg,
        #0AC50044 ${angle + 2}deg,
        transparent ${angle + 5}deg, 
        transparent 360deg)`,
      mask: 'radial-gradient(circle, transparent 58%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.5) 62%, black 65%)',
      WebkitMask: 'radial-gradient(circle, transparent 58%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.5) 62%, black 65%)',
      filter: 'blur(0.2px)',
      zIndex: 20,
      pointerEvents: 'none' as const,
    };
  };

  return {
    isHovered,
    setIsHovered,
    animationCompleted,
    animationProgress,
    getBorderStyle
  };
};
