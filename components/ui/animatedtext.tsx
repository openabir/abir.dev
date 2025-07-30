import React from 'react';
import { motion, Variants } from 'framer-motion';

// Define the type for the component props
interface AnimatedTextProps {
  text: string;
  el?: React.ElementType; // Allows any valid HTML tag or React component
  className?: string;
}

// Animation variants for the parent container.
// The main job of this variant is to orchestrate the stagger effect.
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.075, // Controls the delay between each character animation
    },
  },
};

// Animation variants for each character.
// This defines how each letter will animate in.
const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: '100%', // Start each character completely below its final position
  },
  visible: {
    opacity: 1,
    y: '0%', // Animate to its final position
    transition: {
      type: 'spring', // Use a spring animation for a natural, bouncy feel
      damping: 12, // Controls the "bounciness". Lower is more bouncy.
      stiffness: 100, // Controls the "stiffness" of the spring.
    },
  },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  el: Wrapper = 'h1',
  className,
}) => {
  return (
    <Wrapper className={className}>
      <motion.span
        style={{ overflow: 'hidden', display: 'inline-block' }}
        variants={containerVariants}
        initial="hidden"
        // Use whileInView to trigger the animation when the component scrolls into view
        whileInView="visible"
        // By removing `viewport={{ once: true }}`, the animation will now trigger
        // every time the component enters the viewport and reset when it leaves.
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            style={{ display: 'inline-block' }}
          >
            {/* Use a non-breaking space for space characters to prevent them from collapsing */}
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;
