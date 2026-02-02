import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { getAllNewsMetadata } from "@/lib/news";
import NewsListClient from "./NewsListClient";

export const dynamic = 'force-static';

export const metadata = {
  title: 'ニュース | bestiee',
  description: 'bestieeの最新ニュース、プレスリリース、イベント情報をお届けします。',
};

export default function NewsPage() {
  const newsItems = getAllNewsMetadata();

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <PageHero
        title="ニュース"
        title_en="News"
        title_zh="新闻"
        subtitle="News"
        subtitle_en="Latest Updates"
        subtitle_zh="最新动态"
        breadcrumb={[
          { label: 'トップ', label_en: 'Home', label_zh: '首页', href: '/' },
          { label: 'ニュース', label_en: 'News', label_zh: '新闻' },
        ]}
      />

      <NewsListClient newsItems={newsItems} />

      <Footer />
    </main>
  );
}
