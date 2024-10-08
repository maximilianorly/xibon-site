import Link from 'next/link';
import { routes } from '../navigation-tabs';
import { HomeIcon } from '@heroicons/react/24/outline';
import Logo from '../logo';

type HomeButtonProps = {};

const HomeButton: React.FC<HomeButtonProps> = ({}) => {
  return (
    <Link
      href={routes.get('home')!.path}
      className='w-full h-full relative group'
    >
      <div className='w-full h-full flex justify-center items-center absolute opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100'>
        <div className='w-8 h-8'>
          <HomeIcon className='text-current' />
        </div>
      </div>
      <div className='w-full h-full absolute transition-opacity duration-200 ease-in-out group-hover:opacity-0 flex justify-center items-center'>
        <Logo />
      </div>
    </Link>
  );
};

export default HomeButton;
