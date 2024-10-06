import { headers } from 'next/headers';
import { logPageVisit } from './utils/logger';
import InteractiveDots from './components/interactive-dots';

export default function Home() {
  const headersList = headers();
  const referer = headersList.get('referer');

  logPageVisit('Home', referer);

  return (
    <>
      <div className='w-full h-full relative flex justify-center items-center'>
        <InteractiveDots />
        <h2 className='text-4xl md:text-6xl tracking-widest'>
          Welcome<span className='tracking-normal'>.</span>
        </h2>
      </div>
    </>
  );
}
