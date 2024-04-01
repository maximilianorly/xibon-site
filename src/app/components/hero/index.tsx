'use client';
import { routes } from '../navigation-tabs';
import { usePathname } from 'next/navigation';
import AboutHero from '../../about/hero';
import WorkHero from '@/app/work/hero';
import ContactHero from '@/app/contact/hero';

type HeroProps = {};

const Hero: React.FC<HeroProps> = ({}) => {
  const pathname = usePathname();
  return (
    <div className='hero__container pl-2 w-80'>
      {pathname === routes.get('about')!.path && <AboutHero />}
      {pathname === routes.get('work')!.path && <WorkHero />}
      {pathname === routes.get('contact')!.path && <ContactHero />}
    </div>
  );
};

export default Hero;
