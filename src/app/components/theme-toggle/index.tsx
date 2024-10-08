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
      className='w-full h-full flex justify-center items-center group'
    >
      <div className='relative w-8 h-8'>
        <OutlineSun className='absolute transition duration-200 ease-in-out opacity-0 dark:opacity-100' />
        <OutlineMoon className='absolute transition duration-200 ease-in-out dark:opacity-0' />
      </div>
    </button>
  );
};

export default ThemeToggle;
