import { headers } from 'next/headers';
import { logPageVisit } from '../utils/logger';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Xibon - Contact'
}
const Contact: React.FC = async () => {
  const headersList = await headers();
  const referer = headersList.get('referer');

  logPageVisit('Contact', referer);

  return <>Contact. Coming soon.</>;
};

export default Contact;
