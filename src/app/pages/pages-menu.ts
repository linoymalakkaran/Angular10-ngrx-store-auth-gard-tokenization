import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Maqta Survey',
    group: true,
  },
  {
    title: 'Surveys',
    icon: 'browser-outline',
    link: 'form',
  },
  {
    title: 'Submissions',
    icon: 'browser-outline',
    link: 'form',
  },
  {
    title: 'Survey Management',
    icon: 'lock-outline',
    children: [
      {
        title: 'Access Management',
        link: '',
      },
      {
        title: 'Reports',
        link: '',
      },
    ],
  }
];
