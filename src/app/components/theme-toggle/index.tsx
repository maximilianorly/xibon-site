'use client';
import { MoonIcon as OutlineMoon } from '@heroicons/react/24/outline';
import { SunIcon as OutlineSun } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

type ThemeToggleProps = {};
type TColorScheme = 'light' | 'dark';

const ThemeToggle: React.FC<ThemeToggleProps> = ({}) => {
  const [theme, setTheme] = useState<TColorScheme>(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = sessionStorage.getItem(
        'xibon_theme'
      ) as TColorScheme | null;
      if (storedTheme) {
        return storedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }
    return 'light'; // Temp fallback - handled by SSR
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
      sessionStorage.setItem('xibon_theme', newTheme);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    sessionStorage.setItem('xibon_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      className='w-24 h-24 absolute top-7 right-7 flex justify-center items-center rounded-full cursor-pointer
      transition ease-in-out delay-150 hover:-translate-y-1 hover:text-sys_light hover:dark:text-sys_dark hover:scale-110 duration-200 hover:bg-primary'
    >
      <div className='w-8 h-8'>
        <OutlineSun className='hidden dark:block' />
        <OutlineMoon className='dark:hidden' />
      </div>
    </button>
  );
};

export default ThemeToggle;
