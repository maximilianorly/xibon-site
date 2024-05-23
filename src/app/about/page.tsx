import { headers } from 'next/headers';
import { logPageVisit } from '../utils/logger';
import ColouredContentPanel from '../components/coloured-content-panel';

const About: React.FC = () => {
  const headersList = headers();
  const referer = headersList.get('referer');

  logPageVisit('About', referer);

  return (
    <>
      <ColouredContentPanel colorClassName='bg-primary'></ColouredContentPanel>
    </>
  );
};

export default About;
