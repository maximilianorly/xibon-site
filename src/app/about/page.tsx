import { headers } from 'next/headers';
import { logPageVisit } from '../utils/logger';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Xibon - About'
}

const About: React.FC = () => {
  const headersList = headers();
  const referer = headersList.get('referer');

  logPageVisit('About', referer);

  return <>{"I'm Max. The rest is coming soon."}</>;
};

export default About;
