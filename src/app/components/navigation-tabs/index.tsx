import NavigationTab from './navigation-tab';

enum RoutePath {
  HOME = '/',
  ABOUT = '/about',
  WORK = '/work',
  CONTACT = '/contact',
}

enum RouteLabel {
  ABOUT = 'About',
  WORK = 'Work',
  CONTACT = 'Contact',
  HOME = 'Home',
}

export type Route = { label: RouteLabel; path: RoutePath };

type RoutesMap = Map<string, Route>;

export const routes: RoutesMap = new Map([
  ['about', { label: RouteLabel.ABOUT, path: RoutePath.ABOUT }],
  ['work', { label: RouteLabel.WORK, path: RoutePath.WORK }],
  ['contact', { label: RouteLabel.CONTACT, path: RoutePath.CONTACT }],
  ['home', { label: RouteLabel.HOME, path: RoutePath.HOME }],
]);

const NavigationTabs: React.FC<{}> = () => {
  return (
    <div className='relative z-10'>
      <NavigationTab route={routes.get('about')!} />
      <NavigationTab route={routes.get('work')!} />
      <NavigationTab route={routes.get('contact')!} />
      <NavigationTab route={routes.get('home')!} />
    </div>
  );
};

export default NavigationTabs;
