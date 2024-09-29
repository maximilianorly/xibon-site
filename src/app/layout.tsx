import type { Metadata } from 'next';
import './globals.css';
import Background from './components/background';
import NavigationTabs, { routes } from './components/navigation-tabs';
import Hero from './components/hero';
import Logo from './components/logo';
import Link from 'next/link';
import { sans_font } from './fonts';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
      <body className={`${sans_font.className} w-screen h-screen`}>
        <Background>
          <div className='flex flex-col md:flex-row h-full justify-between p-7'>
            <div className='md:w-72 h-full flex flex-col'>
              <Link className='w-24 h-24' href={routes.get('home')!.path}>
                <Logo />
              </Link>
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
