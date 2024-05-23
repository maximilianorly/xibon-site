import { headers } from 'next/headers';
import { logPageVisit } from '../utils/logger';
import ColouredContentPanel from '../components/coloured-content-panel';

const Work: React.FC = () => {
  const headersList = headers();
  const referer = headersList.get('referer');

  logPageVisit('Work', referer);

  return (
    <>
      <ColouredContentPanel colorClassName='bg-secondary'></ColouredContentPanel>
    </>
  );
};

export default Work;
