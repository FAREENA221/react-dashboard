import React, { useState } from "react";
import {
  FaHome,
  FaChartLine,
  FaWallet,
  FaBitcoin,
  FaIndustry,
  FaChartBar,
  FaBrain,
  FaCalculator,
  FaFileAlt,
  FaChevronDown,
} from "react-icons/fa";
import { IoMdSwap, IoIosArrowDown } from "react-icons/io";

const Sidebar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <aside className="w-20 md:w-64 bg-[#070707] text-gray-300 min-h-screen p-4 lg:block md:block hidden">
      {/* Logo */}
      <div className="hidden md:flex items-center justify-between mb-6">
        <div className="text-xl font-bold text-white">finicify</div>
      </div>

      {/* Navigation */}
      <nav className="space-y-1 text-sm">
        {/* Anasayfa */}
     <button className="flex items-center cursor-pointer w-full px-3 py-2 rounded-md hover:bg-white/5 gap-2">
  <FaHome className="text-blue-400" />
  <span className="hidden md:inline">Anasayfa</span>
  <FaChevronDown className="ml-auto text-[#99a1af]" />  {/* This adds the dropdown icon */}
</button>

        {/* Hisse Senetleri */}
        <button className="flex items-center cursor-pointer w-full px-3 py-2 rounded-md hover:bg-white/5 gap-2">
          <FaChartLine className="text-blue-400" />
          <span className="hidden md:inline">Hisse Senetleri</span>
          <FaChevronDown className="ml-auto text-[#99a1af]" />
        </button>

        {/* Yatırım Fonları */}
        <div>
          <button
            onClick={() => toggleMenu("yatirim")}
            className={`flex items-center cursor-pointer justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 ${
              openMenu === "yatirim" ? "bg-white/10" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              <FaWallet className="text-blue-400" />
              <span className="hidden md:inline">Yatırım Fonları</span>
            </div>
            <IoIosArrowDown
              className={`hidden md:block text-gray-400 transition-transform duration-200 ${
                openMenu === "yatirim" ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Submenu */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openMenu === "yatirim" ? "max-h-[500px] mt-1" : "max-h-0"
            }`}
          >
            <ul className="ml-6 mt-1 space-y-1 text-xs text-gray-400 border-l border-gray-700 pl-3">
              <li className="hover:text-gray-200 cursor-pointer mb-4">
                Yatırım Fonları Detaylı Analiz
              </li>
              <li className="hover:text-gray-200 cursor-pointer mb-4">
                Yıldız/Derecelendirme
              </li>
              <li className="hover:text-gray-200 cursor-pointer mb-4">
                PYS-Şirket Bazlı Analiz
              </li>
              <li className="hover:text-gray-200 cursor-pointer mb-4">
                Sektör-Risk Analizi
              </li>
              <li className="hover:text-gray-200 cursor-pointer mb-4">
                Yatırım Fonu Karşılaştırmalı Risk Analizi
              </li>
              <li className="hover:text-gray-200 cursor-pointer mb-4">
                Model Portföy Özelleştirme
              </li>
              <li className="hover:text-gray-200 cursor-pointer mb-4">
                Yatırım Fonu Karşılaştırmalı Analiz
              </li>
              <li className="hover:text-gray-200 cursor-pointer mb-4">
                Portföy Dağılım Analiz
              </li>
              <li className="hover:text-gray-200 cursor-pointer mb-4">
                PYS/Şemsiye Karşılaştırmalı Analiz
              </li>
              <li className="hover:text-gray-200 cursor-pointer mb-4">
                Fon Model Portföy Oluşturma/Optimizasyon
              </li>
            </ul>
          </div>
        </div>

        {/* Other Menus */}
        <button className="flex items-center cursor-pointer w-full px-3 py-2 rounded-md hover:bg-white/5 gap-2">
          <FaBitcoin className="text-blue-400" />
          <span className="hidden md:inline">Kripto</span>
          <FaChevronDown className="ml-auto text-[#99a1af]" />
        </button>

        <button className="flex items-center cursor-pointer w-full px-3 py-2 rounded-md hover:bg-white/5 gap-2">
          <FaIndustry className="text-blue-400" />
          <span className="hidden md:inline">Emtia</span>
          <FaChevronDown className="ml-auto text-[#99a1af]" />
        </button>

        <button className="flex items-center cursor-pointer w-full px-3 py-2 rounded-md hover:bg-white/5 gap-2">
          <FaChartBar className="text-blue-400" />
          <span className="hidden md:inline">Tahvil</span>
          <FaChevronDown className="ml-auto text-[#99a1af]" />
        </button>

        <button className="flex items-center cursor-pointer w-full px-3 py-2 rounded-md hover:bg-white/5 gap-2 border-b border-solid rounded-none pb-5 mb-5">
          <IoMdSwap className="text-blue-400" />
          <span className="hidden md:inline">Forex</span>
          <FaChevronDown className="ml-auto text-[#99a1af]" />
        </button>

        <button className="flex items-center w-full cursor-pointer px-3 py-2 rounded-md hover:bg-white/5 gap-2">
          <FaBrain className="text-blue-400" />
          <span className="hidden md:inline">Finicify AI</span>
          <FaChevronDown className="ml-auto text-[#99a1af]" />
        </button>

        <button className="flex items-center cursor-pointer w-full px-3 py-2 rounded-md hover:bg-white/5 gap-2">
          <FaCalculator className="text-blue-400" />
          <span className="hidden md:inline">Hesap Makinesi</span>
          <FaChevronDown className="ml-auto text-[#99a1af]" />
        </button>

        <button className="flex items-center cursor-pointer w-full px-3 py-2 rounded-md hover:bg-white/5 gap-2">
          <FaFileAlt className="text-blue-400" />
          <span className="hidden md:inline">Raporlama</span>
          <FaChevronDown className="ml-auto text-[#99a1af]" />
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;