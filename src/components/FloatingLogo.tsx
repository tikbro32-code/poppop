import React, { useState } from 'react';
import { motion, useAnimation } from 'motion/react';
import Logo from './Logo';

export default function FloatingLogo() {
  const controls = useAnimation();
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnd = (_: any, info: any) => {
    setIsDragging(false);
    const windowWidth = window.innerWidth;
    const x = info.point.x;
    
    // Initial position is left-4 (approx 16px from screen edge)
    // We calculate destination relative to viewport
    const leftSnap = 0;
    const rightSnap = windowWidth - 48; // 48px is approx width of logo
    
    const targetScreenX = x < windowWidth / 2 ? leftSnap : rightSnap;
    
    // Initial left position of fixed element is 16px (left-4)
    const relativeX = targetScreenX - 16;

    controls.start({
      x: relativeX,
      transition: { type: 'spring', stiffness: 200, damping: 20 }
    });
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      animate={controls}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={handleDragEnd}
      whileDrag={{ 
        scale: 1.2,
        rotate: [0, -5, 5, -5, 0],
        transition: { rotate: { repeat: Infinity, duration: 0.2 } }
      }}
      className={`fixed top-3 left-4 z-[100] cursor-grab active:cursor-grabbing ${
        isDragging ? 'drop-shadow-[0_0_20px_#00C880]' : ''
      }`}
    >
      <div className={`transition-all duration-300 ${isDragging ? 'scale-110 shadow-[0_0_30px_#00C880] rounded-[10px]' : ''}`}>
         <Logo showText={false} size="md" />
      </div>
    </motion.div>
  );
}
