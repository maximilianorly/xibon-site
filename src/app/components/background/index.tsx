'use client';
const Background: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='bg-fixed bg-sys_light dark:bg-sys_dark'>
      <div className='md:h-screen w-screen bg-cover bg-center bg-no-repeat bg-[url(/backgrounds/dust--dark.png)] dark:bg-[url(/backgrounds/snow--light.png)]'>
        {children}
      </div>
    </div>
  );
};

export default Background;
