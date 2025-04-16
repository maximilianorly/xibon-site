'use client';
import { useEffect, useState } from 'react';
import { MoonIcon as OutlineMoon } from '@heroicons/react/24/outline';
import { SunIcon as OutlineSun } from '@heroicons/react/24/outline';

type ThemeToggleProps = {};
type TColorScheme = 'light' | 'dark';

const ThemeToggle: React.FC<ThemeToggleProps> = ({}) => {
  const [theme, setTheme] = useState<TColorScheme>('light');

  useEffect(() => {
    const cookie = document.cookie
      .split('; ')
      .find((c) => c.startsWith('xibon_theme='))
      ?.split('=')[1] as TColorScheme;

    const initialTheme =
      cookie === 'dark' || cookie === 'light'
        ? cookie
        : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

    setTheme(initialTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    document.cookie = `xibon_theme=${theme}; path=/; max-age=31536000; SameSite=Lax`;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-full h-full flex justify-center items-center group"
    >
      <div className="relative w-8 h-8">
        <OutlineSun className="absolute transition duration-200 ease-in-out opacity-0 dark:opacity-100" />
        <OutlineMoon className="absolute transition duration-200 ease-in-out dark:opacity-0" />
      </div>
    </button>
  );
};

export default ThemeToggle;