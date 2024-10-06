const Background: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className='h-full bg-fixed bg-sys_light dark:bg-sys_dark'>
      <div className='h-screen w-screen bg-repeat bg-center bg-[url(/backgrounds/dust--dark.png)] dark:bg-[url(/backgrounds/snow--light.png)]'>
        <div className='overlay-panel h-full w-full bg-sys_light dark:bg-sys_dark opacity-65 fixed top-0 left-0 backdrop-blur-md z-10 pointer-events-none'></div>
        <div className='w-full h-full relative z-20'>{children}</div>
      </div>
    </div>
  );
};

export default Background;
