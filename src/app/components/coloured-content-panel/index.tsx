type ColouredContentPanelProps = { colorClassName: string };

const ColouredContentPanel: React.FC<ColouredContentPanelProps> = ({
  colorClassName,
}) => {
  return (
    <>
      <div className='w-full relative'>
        <div
          className={`w-full md:w-115 h-150  ${colorClassName} rounded-5xl shadow-[#00000057] blur-lg shadow-backdrop`}
        ></div>
        <div className='absolute top-0 md:top-5 md:right-5 w-11/12 h-11/12 md:w-115 md:h-150 bg-[#eeeeeecc] dark:bg-[#2f2f2dcc] rounded-4xl backdrop-blur-lg shadow-[#00000033] shadow-passthrough'></div>
      </div>
    </>
  );
};

export default ColouredContentPanel;
