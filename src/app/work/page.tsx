import { headers } from 'next/headers';
import { logPageVisit } from '../utils/logger';

const Work: React.FC = () => {
  const headersList = headers();
  const referer = headersList.get('referer');

  logPageVisit('Work', referer);

  return <>Work</>;
};

export default Work;
