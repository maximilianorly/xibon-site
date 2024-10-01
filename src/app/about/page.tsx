import { headers } from 'next/headers';
import { logPageVisit } from '../utils/logger';

const About: React.FC = () => {
  const headersList = headers();
  const referer = headersList.get('referer');

  logPageVisit('About', referer);

  return <>I'm Max. The rest is coming soon.</>;
};

export default About;
