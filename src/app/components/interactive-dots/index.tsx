'use client'
import React, { useEffect, useState } from 'react';
import styles from './interactive-dots.module.css';

type InteractiveDotsProps = {};

const InteractiveDots: React.FC<InteractiveDotsProps> = ({}) => {
  const [positions, setPositions] = useState<{ [key: string]: { x: number; y: number } } | null>(null);

  useEffect(() => {
    setPositions({
      orange: { x: window.innerWidth / 4, y: window.innerHeight / 2 },
      blue: { x: window.innerWidth / 2, y: window.innerHeight / 3 },
      purple: { x: (window.innerWidth / 4) * 3, y: window.innerHeight / 2 },
    });
  }, []);

  useEffect(() => {
    if (!positions) return;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      setPositions((prev) => {
        if (!prev) return null;
        return {
          orange: {
            x: prev?.orange?.x + (clientX - prev?.orange?.x) * 0.05,
            y: prev?.orange?.y + (clientY - prev?.orange?.y) * 0.05,
          },
          blue: {
            x: prev?.blue?.x + (clientX - prev?.blue?.x) * 0.07,
            y: prev?.blue?.y + (clientY - prev?.blue?.y) * 0.07,
          },
          purple: {
            x: prev?.purple?.x + (clientX - prev?.purple?.x) * 0.09,
            y: prev?.purple?.y + (clientY - prev?.purple?.y) * 0.09,
          },
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [positions]);

  if (!positions) return null;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden pointer-events-none interactive-dots-wrapper -z-10">
      <div className="relative w-full h-full">
        <div
          className={`${styles['blob-orange']} w-72 h-72 blur-2xl absolute`}
          style={{
            transform: `translate(${positions.orange.x}px, ${positions.orange.y}px)`,
            transition: 'transform 0.05s linear',
          }}
        />
        <div
          className={`${styles['blob-blue']} w-96 h-96 blur-2xl absolute`}
          style={{
            transform: `translate(${positions.blue.x}px, ${positions.blue.y}px)`,
            transition: 'transform 0.05s linear',
          }}
        />
        <div
          className={`${styles['blob-purple']} w-56 h-56 blur-2xl absolute`}
          style={{
            transform: `translate(${positions.purple.x}px, ${positions.purple.y}px)`,
            transition: 'transform 0.05s linear',
          }}
        />
      </div>
    </div>
  );
};

export default InteractiveDots;
