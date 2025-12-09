import type { Theme, MealTime } from '../types';

export const THEMES: Record<MealTime, Theme> = {
  lunch: {
    bg: 'bg-amber-400',
    text: 'text-amber-950',
    lightBg: 'bg-amber-50',
    button: 'bg-amber-500',
    titleColor: 'text-amber-950'
  },
  dinner: {
    bg: 'bg-orange-500',
    text: 'text-orange-950',
    lightBg: 'bg-orange-50',
    button: 'bg-orange-600',
    titleColor: 'text-white'
  },
  latenight: {
    bg: 'bg-indigo-900',
    text: 'text-indigo-900',
    lightBg: 'bg-indigo-50',
    button: 'bg-indigo-600',
    titleColor: 'text-indigo-100'
  }
};
