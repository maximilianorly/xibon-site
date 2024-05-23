import { headers } from 'next/headers';
import { logPageVisit } from '../utils/logger';
import ColouredContentPanel from '../components/coloured-content-panel';

const Contact: React.FC = () => {
  const headersList = headers();
  const referer = headersList.get('referer');

  logPageVisit('Contact', referer);

  return (
    <>
      <ColouredContentPanel colorClassName='bg-tertiary'></ColouredContentPanel>
    </>
  );
};

export default Contact;
