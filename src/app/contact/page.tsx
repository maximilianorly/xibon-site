import { headers } from 'next/headers';
import { logPageVisit } from '../utils/logger';

const Contact: React.FC = () => {
  const headersList = headers();
  const referer = headersList.get('referer');

  logPageVisit('Contact', referer);

  return <>Contact. Coming soon.</>;
};

export default Contact;
