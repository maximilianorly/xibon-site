'use client';
const Background: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='h-full bg-fixed bg-sys_light dark:bg-sys_dark'>
      <div className='h-screen w-screen bg-repeat bg-center bg-[url(/backgrounds/dust--dark.png)] dark:bg-[url(/backgrounds/snow--light.png)]'>
        {children}
      </div>
    </div>
  );
};

export default Background;
