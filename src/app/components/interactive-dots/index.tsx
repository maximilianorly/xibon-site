import styles from './interactive-dots.module.css';
type InteractiveDotsProps = {};

const InteractiveDots: React.FC<InteractiveDotsProps> = ({}) => {
  return (
    <>
      <div className='relative'>
        <div className={`${styles['blob-orange']} w-72 h-72 blur-2xl`}></div>
        <div className={`${styles['blob-blue']} w-96 h-96 blur-2xl`}></div>
        <div className={`${styles['blob-purple']} w-56 h-56 blur-2xl`}></div>
      </div>
    </>
  );
};

export default InteractiveDots;
