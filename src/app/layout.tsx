import type { Metadata } from 'next';
import './globals.css';
import Background from './components/background';
import NavigationTabs from './components/navigation-tabs';
import Hero from './components/hero';
import { sans_font } from './fonts';
import ThemeToggle from './components/theme-toggle';
import SsrThemeManagerScript from './components/theme-toggle/ssr-theme-manager';
import AnimatedDotButton from './components/animated-dot-button';
import HomeButton from './components/home-button';

export const metadata: Metadata = {
  title: 'Xibon',
  description: 'Xibon is a brand specialising in web development and design. We create beautiful, responsive websites and web applications. Contact us for your next bespoke project.',
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  return (
    <html lang='en'>
      <head>
        <SsrThemeManagerScript />
      </head>
      <body
        className={`${sans_font.className} w-screen h-screen text-sys_dark dark:text-sys_light`}
      >
        <Background>
          <div className='w-24 h-24 absolute top-7 right-7'>
            <AnimatedDotButton>
              <ThemeToggle />
            </AnimatedDotButton>
          </div>
          <div className='w-24 h-24 absolute top-7 left-7'>
            <AnimatedDotButton>
              <HomeButton />
            </AnimatedDotButton>
          </div>
          <div className='flex flex-col md:flex-row h-full justify-between p-7'>
            <div className='md:w-72 h-full flex flex-col'>
              <div className='h-1/2 flex flex-col justify-center'>
                <Hero />
              </div>
              <div className='h-1/2 flex flex-col justify-center'>
                <NavigationTabs />
              </div>
            </div>
            <main className='flex flex-col grow items-center justify-center md:p-24'>
              {children}
            </main>
          </div>
        </Background>
      </body>
    </html>
  );
}
