"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center py-3 px-6 border-b">
        {/* Logo */}
        <div className="flex items-center">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-red-500"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 3.81c-3.84 0-6.96 3.09-6.96 6.89 0 1.62.6 3.06 1.58 4.27l5.07 6.52 5.03-6.47c1-1.24 1.61-2.7 1.61-4.32 0-3.8-3.12-6.89-6.96-6.89Zm-3.83 6.88c0-2.12 1.7-3.85 3.83-3.85 2.13 0 3.83 1.73 3.83 3.85 0 .83-.28 1.63-.8 2.3l-3.03 3.87-3.06-3.91c-.5-.66-.77-1.45-.77-2.26Zm-.72 9.27a.99.99 0 0 0-1.58 1.18l3.38 4.35c.65.86 1.56 1.3 2.55 1.3.98 0 1.89-.44 2.54-1.3l3.38-4.35a.99.99 0 0 0-1.57-1.18l-3.4 4.37c-.36.47-.77.67-1.24.67-.48 0-.89-.2-1.26-.67l-3.4-4.37Z"
              fill="currentColor"
            />
          </svg>
          <span className="text-red-500 font-bold text-xl ml-1">Pantip</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center space-x-6 text-gray-600">
          <a href="#" className="font-bold">หน้าแรก</a>
          <a href="#" className="text-gray-400">My Feed</a>
          <a href="#" className="text-gray-400">Pantip Pick</a>
          <a href="#" className="text-gray-400">Pantip Hitz</a>
          <a href="#" className="text-gray-400">Explore</a>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden xl:flex items-center space-x-4">
          <a href="#" className="text-sm font-medium">+ ตั้งกระทู้</a>
          <a href="#" className="text-sm font-medium">คอมมูนิตี้</a>
          <div className="flex items-center space-x-2 border rounded-full px-3 py-1 hover:shadow-md cursor-pointer">
            <span className="text-gray-600">เข้าสู่ระบบ / สมัครสมาชิก</span>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
              👤
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden p-2 rounded-full hover:bg-gray-200 transition"
          onClick={() => setIsDrawerOpen(true)}
        >
          <FaBars size={24} />
        </button>
      </header>

      {/* Drawer Menu สำหรับ Mobile */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform z-10 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-semibold">เมนู</span>
          <button onClick={() => setIsDrawerOpen(false)}>
            <FaTimes size={24} />
          </button>
        </div>

        {/* Menu List */}
        <nav className="flex flex-col space-y-4 p-4 text-gray-700">
          <a href="#" className="font-bold">หน้าแรก</a>
          <a href="#">My Feed</a>
          <a href="#">Pantip Pick</a>
          <a href="#">Pantip Hitz</a>
          <a href="#">Explore</a>
          <hr />
          <a href="#" className="text-sm font-medium">+ ตั้งกระทู้</a>
          <a href="#" className="text-sm font-medium">คอมมูนิตี้</a>
          <a href="#" className="text-sm font-medium">เข้าสู่ระบบ / สมัครสมาชิก</a>
        </nav>
      </div>
    </>
  );
}
