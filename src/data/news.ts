// News data types and centralized data

/**
 * News item displayed on the homepage News section
 */
export interface HomeNewsItem {
  date: string;
  category: string;
  title: string;
  image: string;
}

/**
 * Featured news item displayed on the news page
 */
export interface FeaturedNewsItem {
  date: string;
  categories: string[];
  title: string;
  image: string;
  href: string;
}

/**
 * News list item displayed on the news page
 */
export interface NewsListItem {
  id: number;
  date: string;
  categories: string[];
  title: string;
  imageType: string;
  href: string;
}

/**
 * Filter options for news page
 */
export interface NewsFilterOptions {
  categories: string[];
  themes: string[];
  years: string[];
}

// Homepage news items
export const homeNewsItems: HomeNewsItem[] = [
  {
    date: '2026.1.13',
    category: 'プレスリリース',
    title: 'ヤプリ、顧客体験の本質を再定義するオンラインイベント「UPDATE Forward」を開催〜スターバックス・SHIRO・BAKE・…',
    image: '/news/news1.jpg',
  },
  {
    date: '2026.1.7',
    category: 'プレスリリース',
    title: 'アプリでやりたい施策はできていますか？担当者200人の本音から見る、アプリ運用実態調査',
    image: '/news/news2.jpg',
  },
  {
    date: '2025.12.18',
    category: 'お知らせ',
    title: '年末年始休業のお知らせ',
    image: '/news/news3.jpg',
  },
  {
    date: '2025.12.10',
    category: 'イベント',
    title: '日本最大級 DX実現のための総合展「DX 総合EXPO 2025 冬 大阪」に出展します（2025年12月17日〜19日・インテックス大阪 1・2…',
    image: '/news/news4.jpg',
  },
];

// Featured news on the news page
export const featuredNews: FeaturedNewsItem = {
  date: '2025.06.23',
  categories: ['プレスリリース', 'コーポレート'],
  title: '「SmartHR」が10周年を記念し特設サイトを公開。あわせてサービスビジョンを刷新',
  image: '/news/featured.png',
  href: '#',
};

// News list items on the news page
export const newsListItems: NewsListItem[] = [
  {
    id: 1,
    date: '2026.01.13',
    categories: ['お知らせ', 'コーポレート'],
    title: 'SmartHR、ITコンサルティング事業を展開するKICK ZA ISSUE株式会社をグループ会社化',
    imageType: 'kickza',
    href: '#',
  },
  {
    id: 2,
    date: '2025.12.26',
    categories: ['お知らせ', 'コーポレート'],
    title: 'VR体験に関するお知らせ',
    imageType: 'logo',
    href: '#',
  },
  {
    id: 3,
    date: '2025.12.08',
    categories: ['お知らせ', 'コーポレート'],
    title: '不適切なブログ記載内容についてのお詫びとご報告',
    imageType: 'logo',
    href: '#',
  },
  {
    id: 4,
    date: '2025.07.10',
    categories: ['お知らせ', 'サービス'],
    title: 'AI類似従業員検索機能をリリース',
    imageType: 'ai-search',
    href: '#',
  },
  {
    id: 5,
    date: '2025.06.28',
    categories: ['お知らせ', 'サービス'],
    title: '給与シミュレーション機能',
    imageType: 'salary',
    href: '#',
  },
  {
    id: 6,
    date: '2025.06.15',
    categories: ['プレスリリース', 'コーポレート'],
    title: 'SmartHRが注目サービスに選出されました',
    imageType: 'logo',
    href: '#',
  },
  {
    id: 7,
    date: '2025.07.10',
    categories: ['お知らせ', 'コーポレート'],
    title: 'SmartHR、直上企業サービスの共用を目指す「年末志事業アジャスト」へ新たに参画',
    imageType: 'photo1',
    href: '#',
  },
  {
    id: 8,
    date: '2025.06.30',
    categories: ['プレスリリース', 'サービス'],
    title: '人・知識の使える、AIアシスタント機能をリリース',
    imageType: 'ai-assistant',
    href: '#',
  },
  {
    id: 9,
    date: '2025.06.23',
    categories: ['プレスリリース', 'コーポレート'],
    title: '「SmartHR」が10周年を記念し特設サイトを公開。あわせてサービスビジョンを刷新',
    imageType: 'anniversary',
    href: '#',
  },
];

// Filter options for news page
export const newsFilterOptions: NewsFilterOptions = {
  categories: ['プレスリリース', 'お知らせ'],
  themes: ['コーポレート', 'サービス'],
  years: ['2026年', '2025年', '2024年', '2023年', '2022年', '2021年'],
};
