'use client';

import React from 'react';
import Image from 'next/image';
import { useProfileHover } from '@/components/ui/useProfileHover';

const ProfileImage = () => {
  const {
    isHovered,
    setIsHovered,
    animationCompleted,
    animationProgress,
    getBorderStyle
  } = useProfileHover();

  return (
    <div 
      className="relative flex h-20 w-20 items-center justify-center rounded-full overflow-visible border-4 border-solid border-gray-300 dark:border-gray-700 transition-all duration-500 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: 'relative', zIndex: 1 }}
    >
      {isHovered && animationProgress > 0 && (
        <div style={getBorderStyle()} />
      )}

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
