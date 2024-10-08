type AnimatedDotButtonProps = {
  children: React.ReactNode;
  classNames?: string;
};

const AnimatedDotButton: React.FC<AnimatedDotButtonProps> = ({
  children,
  classNames = '',
}) => {
  return (
    <div
      className={`w-full h-full flex justify-center items-center rounded-full cursor-pointer
      transition ease-in-out delay-150 hover:-translate-y-1 hover:text-sys_light hover:dark:text-sys_dark hover:scale-110 duration-200 hover:bg-primary ${classNames}`}
    >
      {children}
    </div>
  );
};

export default AnimatedDotButton;
