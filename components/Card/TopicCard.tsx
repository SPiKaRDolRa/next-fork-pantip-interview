"use client";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

type TopicProps = {
  title: string;
  name: string;
  url: string;
  datetime: string;
  image?: string;
};

export default function TopicCard({ title, name, url, datetime, image }: TopicProps) {
  const fallbackImage = "https://via.placeholder.com/320x200?text=No+Image";

  return (
    <div className="w-full max-w-[320px] rounded-lg overflow-hidden shadow-md bg-white">
      {/* รูปภาพหลัก */}
      <div className="relative w-full h-[200px]">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Image
            src={image || fallbackImage}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
            unoptimized
          />
        </a>
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:scale-110 transition">
          <FaHeart className="text-gray-500" size={18} />
        </button>
      </div>

      {/* ข้อมูลหัวข้อ */}
      <div className="p-3">
        <h2 className="text-md font-semibold line-clamp-2">{title}</h2>
        <p className="text-gray-500 text-sm">{name}</p>
        <p className="text-gray-400 text-xs">{datetime}</p>
      </div>
    </div>
  );
}
