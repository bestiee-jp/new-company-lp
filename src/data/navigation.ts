// Navigation data types and centralized data

/**
 * Sub-item in a navigation menu
 */
export interface NavSubItem {
  label: string;
  href: string;
}

/**
 * Main navigation menu item
 */
export interface NavMenuItem {
  label: string;
  sublabel: string;
  href?: string;
  hasSubmenu?: boolean;
  subItems?: NavSubItem[];
}

/**
 * Dropdown menu configuration
 */
export interface DropdownMenuConfig {
  title: string;
  items: NavSubItem[];
}

// Main navigation items for header
export const mainNavItems: { label: string; href: string }[] = [
  { label: '私たちについて', href: '/mission' },
  { label: 'サービス', href: '/service' },
  { label: 'ニュース', href: '/news' },
];

// Navigation items with dropdown (for header dropdown)
export const navItemsWithDropdown: string[] = ['会社情報'];

// Slide menu items data (mobile menu and hamburger menu)
export const slideMenuItems: NavMenuItem[] = [
  { label: '私たちについて', sublabel: 'About Us', href: '/mission' },
  { label: 'サービス', sublabel: 'Service', href: '/service' },
  { label: 'ニュース', sublabel: 'News', href: '/news' },
  {
    label: '会社情報',
    sublabel: 'Company',
    hasSubmenu: true,
    subItems: [
      { label: '会社情報', href: '/company' },
      { label: '役員紹介', href: '/company/executives' },
      { label: '沿革', href: '/company/history' },
    ],
  },
];

// Dropdown menus configuration
export const dropdownMenus: Record<string, DropdownMenuConfig> = {
  '会社情報': {
    title: '会社情報',
    items: [
      { label: '会社情報', href: '/company' },
      { label: '役員紹介', href: '/company/executives' },
      { label: '沿革', href: '/company/history' },
    ],
  },
};

// Company submenu items (used in multiple places)
export const companySubMenuItems: NavSubItem[] = [
  { label: '会社情報', href: '/company' },
  { label: '役員紹介', href: '/company/executives' },
  { label: '沿革', href: '/company/history' },
];

// Contact link
export const contactLink = {
  label: 'お問い合わせ',
  href: '/contact',
};
