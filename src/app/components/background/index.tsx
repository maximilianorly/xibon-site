'use client';

import { usePathname } from 'next/navigation';

const Background: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const pathname = usePathname();
  const showInteractiveDots = pathname === '/';

  return (
    <div className='h-full bg-fixed bg-sys_light dark:bg-sys_dark'>
      <div className='relative h-screen w-screen bg-repeat bg-center bg-[url(/backgrounds/dust--dark.png)] dark:bg-[url(/backgrounds/snow--light.png)]'>
        <div className='overlay-panel h-full w-full bg-sys_light dark:bg-sys_dark opacity-65 fixed top-0 left-0 backdrop-blur-md z-10 pointer-events-none'></div>
        {showInteractiveDots && (
          <>
            <div className='w-72 h-72 bg-secondary hidden md:block fixed top-0 left-0 rounded-full blur-2xl animate-float-from-left hover:opacity-100 pointer-events-auto'></div>
            <div className='w-96 h-96 bg-primary hidden md:block fixed top-0 left-0 rounded-full blur-2xl animate-float-from-top'></div>
            <div className='w-56 h-56 bg-tertiary hidden md:block fixed top-0 right-0 rounded-full blur-2xl animate-float-from-right'></div>
          </>
        )}
        <div className='w-full h-full relative z-20'>{children}</div>
      </div>
    </div>
  );
};

export default Background;
