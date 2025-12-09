import {
  Utensils,
  Sandwich,
  Drumstick,
  Beef,
  Pizza,
  Soup,
  Beer
} from 'lucide-react';
import type { MenuType } from '../types';

export const getIconByType = (type: MenuType): JSX.Element => {
  switch (type) {
    case 'burger':
    case 'sandwich':
      return <Sandwich size={120} className="opacity-10" />;
    case 'chicken':
      return <Drumstick size={120} className="opacity-10" />;
    case 'meat':
      return <Beef size={120} className="opacity-10" />;
    case 'pizza':
      return <Pizza size={120} className="opacity-10" />;
    case 'stew':
      return <Soup size={120} className="opacity-10" />;
    case 'pub':
      return <Beer size={120} className="opacity-10" />;
    case 'korean':
    case 'dessert':
    default:
      return <Utensils size={120} className="opacity-10" />;
  }
};
