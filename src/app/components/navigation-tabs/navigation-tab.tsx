'use client';
import { usePathname } from 'next/navigation';
import { Route } from '.';
import Link from 'next/link';

const NavigationTab: React.FC<{ route: Route }> = ({ route }) => {
  const pathname = usePathname();

  const isActive = (): boolean => {
    // if (!route) throw new Error();
    return route.path === pathname;
  };

  if (!route) {
    return <>Loading...</>;
  }
  return (
    <div className='navigation-tab__container py-6'>
      <Link className='navigation-tab__link' href={route.path}>
        <div
          className={`w-12 h-8 flex ${
            isActive() ? 'text-primary' : 'text-gray-800'
          }`}
        >
          {isActive() && <div className='animate-activeTabSlide'></div>}
          <div
            className={`flex flex-col justify-end text-md mb-[-0.25rem] ${
              isActive()
                ? 'text-primary font-extrabold'
                : 'hover:tracking-widest'
            }`}
          >
            {route.label.toLocaleLowerCase()}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NavigationTab;
