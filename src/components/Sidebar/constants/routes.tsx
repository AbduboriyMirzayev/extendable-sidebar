import SIDEBAR_ROUTE_CATEGORIES from './routeCategories';

import PATHS from 'routes/paths';
import { ReactComponent as MenuIcon } from '../assets/icons/menu.svg';
import { ReactComponent as StatsIcon } from '../assets/icons/stats.svg';
import { ReactComponent as AchievementsIcon } from '../assets/icons/achievements.svg';

export type RouteType = {
  icon?: JSX.Element;
  label: string;
  category: keyof typeof SIDEBAR_ROUTE_CATEGORIES;
  path: (typeof PATHS)[keyof typeof PATHS];
  children?: Omit<RouteType, 'category' | 'children'>[];
};

const SIDEBAR_ROUTES: RouteType[] = [
  {
    label: 'Menu',
    icon: <MenuIcon />,
    category: 'category 1',
    path: PATHS.MENU
  },
  {
    label: 'Stats',
    icon: <StatsIcon />,
    category: 'category 1',
    path: PATHS.STATS
  },
  {
    label: 'Achievements',
    icon: <AchievementsIcon />,
    category: 'category 2',
    path: PATHS.ACHIEVEMENTS,
    children: [
      {
        label: 'Menu 1',
        path: PATHS.ACHIEVEMENTS
      },
      {
        label: 'Menu 2',
        path: PATHS.ACHIEVEMENTS
      }
    ]
  }
];

export default SIDEBAR_ROUTES;
