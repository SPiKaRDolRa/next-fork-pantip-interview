"use client";
import { FaSearch } from "react-icons/fa";

export default function SearchInput() {
  return (
    <div className="flex items-center bg-white border rounded-full shadow-md px-4 py-2 w-full max-w-md">
      <input
        type="text"
        placeholder="ค้นหาบน Pantip"
        className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400"
      />
      <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
        <FaSearch size={16} />
      </button>
    </div>
  );
}
