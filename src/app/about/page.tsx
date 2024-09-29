import { headers } from 'next/headers';
import { logPageVisit } from '../utils/logger';

const About: React.FC = () => {
  const headersList = headers();
  const referer = headersList.get('referer');

  logPageVisit('About', referer);

  return <>About. Coming soon.</>;
};

export default About;
