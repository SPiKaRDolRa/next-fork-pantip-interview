"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaCamera, FaCar, FaChevronLeft, FaChevronRight, FaCode, FaDumbbell, FaFilm, FaGamepad, FaGlobeAsia, FaHeart, FaHome, FaMotorcycle, FaMusic, FaPaw, FaPencilAlt, FaShip, FaShoppingCart, FaTree, FaTv, FaUserFriends, FaUtensils, FaWineGlassAlt } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";

const categories = [
  { id: "technology", name: "เทคโนโลยี", icon: <FaCode size={24} /> },
  { id: "social", name: "สังคม", icon: <FaUserFriends size={24} /> },
  { id: "finance", name: "การเงิน", icon: <GiReceiveMoney size={24} /> },
  { id: "photography", name: "กล้องถ่ายรูป", icon: <FaCamera size={24} /> },
  { id: "games", name: "เกม", icon: <FaGamepad size={24} /> },
  { id: "travel", name: "ท่องเที่ยว", icon: <FaGlobeAsia size={24} /> },
  { id: "movies", name: "ภาพยนตร์", icon: <FaFilm size={24} /> },
  { id: "writing", name: "ถนนนักเขียน", icon: <FaPencilAlt size={24} /> },
  { id: "automotive", name: "รถยนต์", icon: <FaCar size={24} /> },
  { id: "motorcycle", name: "มอเตอร์ไซค์", icon: <FaMotorcycle size={24} /> },
  { id: "home", name: "ที่อยู่อาศัย", icon: <FaHome size={24} /> },
  { id: "nature", name: "สิ่งแวดล้อม", icon: <FaTree size={24} /> },
  { id: "food", name: "อาหารการกิน", icon: <FaUtensils size={24} /> },
  { id: "fitness", name: "กีฬาและสุขภาพ", icon: <FaDumbbell size={24} /> },
  { id: "tv", name: "โทรทัศน์", icon: <FaTv size={24} /> },
  { id: "music", name: "ดนตรี", icon: <FaMusic size={24} /> },
  { id: "love", name: "ความรัก", icon: <FaHeart size={24} /> },
  { id: "party", name: "เครื่องดื่มและบันเทิง", icon: <FaWineGlassAlt size={24} /> },
  { id: "boats", name: "เรือและการเดินทาง", icon: <FaShip size={24} /> },
  { id: "fashion", name: "แฟชั่น", icon: <FaShoppingCart size={24} /> },
  { id: "pets", name: "สัตว์เลี้ยง", icon: <FaPaw size={24} /> },
];

export default function CategoryTabs({ onSelect }: { onSelect: (category: string) => void }) {
  const [selected, setSelected] = useState("technology");
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setIsAtStart(scrollRef.current.scrollLeft === 0);
        setIsAtEnd(scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth);
      }
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full flex items-center">
      {/* ปุ่มเลื่อนซ้าย */}
      {!isAtStart && (
        <button onClick={scrollLeft} className="absolute left-0 z-10 bg-gray-200 p-2 rounded-full shadow-md">
          <FaChevronLeft size={20} />
        </button>
      )}

      {/* Categories */}
      <div ref={scrollRef} className="flex gap-6 px-10 py-3 border-b overflow-x-hidden whitespace-nowrap">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setSelected(category.id);
              onSelect(category.id);
            }}
            className="flex flex-col items-center text-gray-500 hover:text-black transition relative cursor-pointer"
          >
            {category.icon}
            <span className={`text-sm mt-1 ${selected === category.id ? "font-semibold text-black" : ""}`}>
              {category.name}
            </span>
            {selected === category.id && (
              <motion.div layoutId="underline" className="w-6 h-[2px] bg-black rounded absolute -bottom-2" />
            )}
          </button>
        ))}
      </div>

      {/* ปุ่มเลื่อนขวา */}
      {!isAtEnd && (
        <button onClick={scrollRight} className="absolute right-0 z-10 bg-gray-200 p-2 rounded-full shadow-md">
          <FaChevronRight size={20} />
        </button>
      )}
    </div>
  );
}
