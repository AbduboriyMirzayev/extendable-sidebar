import React from 'react';
import { mergeRoutesWithCategories } from './helpers';
import SIDEBAR_ROUTE_CATEGORIES from './constants/routeCategories';
import SIDEBAR_ROUTES from './constants/routes';
import SidebarMenuItem from './components/MenuItem';

function Sidebar() {
  const formattedRoutes = mergeRoutesWithCategories({
    categories: SIDEBAR_ROUTE_CATEGORIES,
    routes: SIDEBAR_ROUTES
  });

  return (
    <aside className="max-w-80 bg-white p-4 min-h-screen">
      <input
        className="w-full border-black border mt-4 mb-8 p-2 rounded"
        placeholder="Search"
      />
      <nav>
        <ul className="space-y-8">
          {formattedRoutes.map((category) => (
            <SidebarMenuItem
              key={category.category.label}
              category={category}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
