import SIDEBAR_ROUTE_CATEGORIES from '../constants/routeCategories';
import { RouteType } from '../constants/routes';

type Categories = typeof SIDEBAR_ROUTE_CATEGORIES;

type MergeRoutesWithCategoriesArgs = {
  routes: RouteType[];
  categories: Categories;
};

export type FormattedRouteType = {
  category: {
    label: string;
    configs?: {
      collapsable?: boolean;
    };
  };
  routes: RouteType[];
};

export const mergeRoutesWithCategories = ({
  categories,
  routes
}: MergeRoutesWithCategoriesArgs): FormattedRouteType[] => {
  const categoryLabels = Object.keys(categories) as (keyof Categories)[];

  return categoryLabels.reduce((acc: FormattedRouteType[], categoryLabel) => {
    const categoryRoutes = routes.filter(({ category }) => category === categoryLabel);

    if (categoryRoutes.length) {
      acc.push({
        category: {
          label: categoryLabel,
          configs: categories[categoryLabel]
        },
        routes: categoryRoutes
      });
    }

    return acc;
  }, []);
};
