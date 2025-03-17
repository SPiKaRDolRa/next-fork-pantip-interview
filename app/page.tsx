"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import TopicCard from "@/components/Card/TopicCard";
import SearchInput from "@/components/Input/SearchInput";
import LoadingSkeleton from "@/components/Skeleton/LoadingSkeleton";
import CategoryTabs from "@/components/Tabs/CategoryTabs";

type Article = {
  source: {
    title: string;
    name: string;
    url: string;
    datetime: string;
    image: string;
  };
};

type Topic = {
  id: string;
  items: Article[];
};

export default function HomePage() {
  const [highlightTopics, setHighlightTopics] = useState<Topic[]>([]);
  const [trendingTopics, setTrendingTopics] = useState<Topic[]>([]);
  const [latestTopics, setLatestTopics] = useState<Topic[]>([]);
  const [recommendedTopics, setRecommendedTopics] = useState<Topic[]>([]);
  const [category, setCategory] = useState("ทั้งหมด");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        // API 1: Highlight
        const highlightRes = await axios.get(
          "https://frukt.pantip.com/kokos/rd_page_random_5min/pantip:home:home?t=1742204072307"
        );

        // API 2: Trending
        const trendingRes = await axios.get(
          "https://frukt.pantip.com/kokos/rd_page_random_5min/pantip:home:home/tab?t=1742208014038"
        );

        // API 3: Latest
        const latestRes = await axios.get(
          "https://frukt.pantip.com/kokos/rd_page_random_5min/pantip:home:home/tab?t=1742208014046"
        );

        // API 4: Recommended
        const recommendedRes = await axios.get(
          "https://frukt.pantip.com/kokos/rd_page_random_5min/pantip:home:home/tab?t=1742208014045"
        );

        setHighlightTopics(highlightRes.data || []);
        setTrendingTopics(trendingRes.data || []);
        setLatestTopics(latestRes.data || []);
        setRecommendedTopics(recommendedRes.data || []);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="container mx-auto p-4 mt-4">
      {/* Search Bar */}
      <div className="flex justify-center items-center bg-gray-100">
        <SearchInput />
      </div>

      {/* Category Tabs */}
      <div className="mt-8">
        <CategoryTabs onSelect={setCategory} />
      </div>

      {/* Section: Highlight */}
      <Section title="Highlight" topics={highlightTopics} isLoading={isLoading} />

      {/* Section: Trending */}
      <Section title="กำลังมาแรง" topics={trendingTopics} isLoading={isLoading} />

      {/* Section: Latest */}
      <Section title="ล่าสุด" topics={latestTopics} isLoading={isLoading} />

      {/* Section: Recommended */}
      <Section title="แนะนำสำหรับคุณ" topics={recommendedTopics} isLoading={isLoading} />
    </div>
  );
}

// 📌 Section Component แยกโค้ดให้สะอาดขึ้น
function Section({ title, topics, isLoading }: { title: string; topics: Topic[]; isLoading: boolean }) {
  return (
    <div className="mt-8">
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <>
          <h2 className="text-xl font-semibold">{title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 mt-4 place-items-center">
            {topics.flatMap((topic) =>
              topic.items?.map((article, indexArticle) => (
                <TopicCard key={`${article.source.name}-${indexArticle}`} {...article.source} />
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
}
