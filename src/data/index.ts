// Centralized data exports
// Re-export all data and types from individual data files

// News data
export type {
  HomeNewsItem,
  FeaturedNewsItem,
  NewsListItem,
  NewsFilterOptions,
} from './news';

export {
  homeNewsItems,
  featuredNews,
  newsListItems,
  newsFilterOptions,
} from './news';

// Services data
export type {
  ServiceItem,
  ServiceCategory,
} from './services';

export {
  recruitmentServices,
  educationServices,
  serviceCategories,
  serviceIntroduction,
} from './services';

// Navigation data
export type {
  NavSubItem,
  NavMenuItem,
  DropdownMenuConfig,
} from './navigation';

export {
  mainNavItems,
  navItemsWithDropdown,
  slideMenuItems,
  dropdownMenus,
  companySubMenuItems,
  contactLink,
} from './navigation';

// Footer data
export type {
  SocialLink,
  FooterNavLink,
  FooterNavSection,
  PolicyLink,
} from './footer';

export {
  socialLinksColumn1,
  socialLinksColumn2,
  allSocialLinks,
  footerNavSections,
  policyLinks,
  copyrightText,
  footerLogoPath,
} from './footer';

// Company links data
export type {
  CompanyLinkCard,
} from './companyLinks';

export {
  companyLinkCards,
} from './companyLinks';
