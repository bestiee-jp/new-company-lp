// Company links data types and centralized data

/**
 * Company link card data
 */
export interface CompanyLinkCard {
  id: string;
  label: string;
  href: string;
  image: string;
  imageAlt: string;
}

// Company link cards displayed on homepage
export const companyLinkCards: CompanyLinkCard[] = [
  {
    id: 'company',
    label: '会社情報',
    href: '/company',
    image: '/images/company-office.jpg',
    imageAlt: '会社情報',
  },
  {
    id: 'history',
    label: '沿革',
    href: '/company/history',
    image: '/images/history-tib.jpg',
    imageAlt: '沿革',
  },
];
