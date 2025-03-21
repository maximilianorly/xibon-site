'use client'
import { useEffect, useState } from "react";

const Background: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isMoving, setIsMoving] = useState<boolean>(false);
  let timeoutId: NodeJS.Timeout;

  const handleMouseMove = () => {
    setIsMoving(true);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setIsMoving(false);
    }, 500);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className='h-full bg-fixed bg-sys_light dark:bg-sys_dark'>
      <div className='h-screen w-screen bg-repeat bg-center bg-[url(/backgrounds/dust--dark.png)] dark:bg-[url(/backgrounds/snow--light.png)]'>
        <div className={`overlay-panel h-full w-full bg-sys_light dark:bg-sys_dark fixed top-0 left-0 opacity-65 backdrop-blur-md z-10 pointer-events-none transition-opacity duration-500 ${isMoving ? 'animate-pulse-opacity' : ''}`}></div>
        <div className='w-full h-full relative z-20'>{children}</div>
      </div>
    </div>
  );
};

export default Background;
