import { headers } from 'next/headers';
import { logPageVisit } from './utils/logger';

export default function Home() {
  const headersList = headers();
  const referer = headersList.get('referer');

  logPageVisit('Home', referer);

  return <>Home</>;
}
