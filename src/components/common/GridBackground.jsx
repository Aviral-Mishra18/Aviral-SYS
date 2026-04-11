import React from 'react';

const GridBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Base Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
      
      {/* Radial Gradient overlay to fade the grid at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#030712_80%)]"></div>
      
      {/* Animated Scanline */}
      <div className="scanline"></div>

      {/* Decorative Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyber-blue/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-cyber-purple/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default GridBackground;
