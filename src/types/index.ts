export type MenuType = 'burger' | 'sandwich' | 'chicken' | 'meat' | 'pizza' | 'stew' | 'korean' | 'pub' | 'dessert';

export type MealTime = 'lunch' | 'dinner' | 'latenight';

export type ViewState = 'start' | 'loading' | 'result';

export interface MenuItem {
  id: number;
  brand: string;
  name: string;
  type: MenuType;
}

export interface Theme {
  bg: string;
  text: string;
  lightBg: string;
  button: string;
  titleColor: string;
}

export interface Tab {
  id: MealTime;
  label: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
}
