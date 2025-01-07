import { useState } from 'react';

import { FormattedRouteType } from 'components/Sidebar/helpers';
import { ReactComponent as ChevronIcon } from '../../assets/icons/chevron.svg';

type Props = {
  category: FormattedRouteType;
};

function SidebarMenuItem({ category }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <li className="space-y-6 font-semibold">
      {category.category.configs?.collapsable ? (
        <button
          className="flex justify-between text-sm w-full capitalize text-gray-600"
          aria-controls="sidebar-routes"
          onClick={() => setIsOpen(!isOpen)}>
          {category.category.label}
          <ChevronIcon className={isOpen ? '' : 'rotate-180'} />
        </button>
      ) : (
        <h6 className="text-sm capitalize text-gray-600">
          {category.category.label}
        </h6>
      )}
      <ul
        className={`space-y-6 ${isOpen ? 'block' : 'hidden'}`}
        aria-label="sidebar-routes"
        aria-hidden={!isOpen}>
        {category.routes.map((route) => (
          <li key={route.label} className="space-y-4">
            <a className="flex gap-x-2" href={route.path}>
              {route.icon}
              <span>{route.label}</span>
            </a>
            {route.children && (
              <ul className="ml-12 space-y-4 ">
                {route.children.map((child) => (
                  <li key={child.label} className="w-full ">
                    <a href={child.path} className="w-full block">
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default SidebarMenuItem;
