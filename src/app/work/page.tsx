import { headers } from 'next/headers';
import { logPageVisit } from '../utils/logger';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Xibon - Work'
}

const Work: React.FC = () => {
  const headersList = headers();
  const referer = headersList.get('referer');

  logPageVisit('Work', referer);

  return <>Work. Coming soon.</>;
};

export default Work;
