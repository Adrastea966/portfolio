import React, { useState, useEffect } from 'react';
import anime from 'animejs';
import '../App.css';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const WaterDropGrid = () => {
  return (
    <div className="relative flex justify-center p-10">
      <DotGrid />
    </div>
  );
};

const DotGrid = () => {
  const { width } = useWindowSize();

  // Ajustar dimensiones de la grilla según el tamaño de la pantalla
  const GRID_WIDTH = width <= 580 ? 10 : width <= 800 ? 15 : 20;
  const GRID_HEIGHT = 20;

  const handleDotClick = (e) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-indigo-400 dark:hover:bg-indigo-300"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-200 dark:from-slate-600 to-indigo-200 dark:to-indigo-300 opacity-50 group-hover:from-slate-500 group-hover:to-slate-600"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={handleDotClick}
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className={`grid w-fit ${
        width <= 580 ? 'ml-10' : width <= 800 ? 'ml-10' : 'ml-60'
      }`}
    >
      {dots}
    </div>
  );
};

export default WaterDropGrid;