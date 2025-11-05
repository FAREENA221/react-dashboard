import React from "react";
import StatsBox from "./StatsBox";
import { FaChevronDown } from "react-icons/fa";

const CompanyComparisonCard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0b1221] to-[#071120] rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-2 text-white">
          Analiz Edilecek Şirket
        </h2>
        <div className="bg-[#8b858529] lg:flex-row md:flex-row rounded-lg py-3 px-4 text-gray-300 flex-col flex justify-between items-center">
          <p>
          <span>Portföy Yönetim Şirketi</span><br/>
          <span className="text-white font-semibold">
            INVEGO PORTFÖY YÖNETİMİ A.Ş.
          </span>
          </p>
          <FaChevronDown className="ml-auto text-[#99a1af]" />
        </div>
      </div>

      {/* Şirket Analizi */}
      <div className="bg-[#0e0e0e] rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Şirket Analizi</h3>
          <button className="text-blue-400 text-sm font-medium hover:text-blue-300">
            Sektörle Karşılaştır
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatsBox title="Toplam Fon Sayısı" value="75" />
          <StatsBox title="Toplam Yönetilen Varlık Büyüklüğü" value="75.7B TL" />
          <StatsBox title="Ortalama Yönetim Ücreti" value="2.03%" />
          <StatsBox title="Ortalama 1 Yıl Getiri" value="23.61%" />
        </div>
      </div>

      {/* Şirket Bazlı Karşılaştırma */}
      <div className="bg-[#0e0e0e] rounded-2xl p-6 overflow-x-auto">
        <h3 className="text-lg font-semibold mb-4 text-white">
          Şirket Bazlı Karşılaştırma
        </h3>
    <div className="overflow-x-auto rounded-lg border border-gray-800">
  <table className="min-w-full text-xs sm:text-sm text-gray-300">
    <thead>
      <tr className="text-gray-400 border-b border-gray-700 bg-[#0e0e0e]">
        <th className="text-left py-2 px-3 whitespace-nowrap">Kurucu</th>
        <th className="text-left py-2 px-3 whitespace-nowrap">Fon Sayısı</th>
        <th className="text-left py-2 px-3 whitespace-nowrap">Toplam Büyüklük (TL)</th>
        <th className="text-left py-2 px-3 whitespace-nowrap">Ortalama Yıl Getiri (%)</th>
        <th className="text-left py-2 px-3 whitespace-nowrap">Ortalama Ücret (%)</th>
        <th className="text-left py-2 px-3 whitespace-nowrap">Ortalama Volatilite (%)</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-800">
      {Array(7)
        .fill(0)
        .map((_, i) => (
          <tr
            key={i}
            className="hover:bg-[#121212] transition-colors duration-200"
          >
            <td className="py-3 px-3 whitespace-nowrap">
              Yapı Kredi Portföy Yönetimi A.Ş.
            </td>
            <td className="px-3">12</td>
            <td className="px-3">34.53</td>
            <td className="px-3">23.53</td>
            <td className="px-3">23.24</td>
            <td className="px-3">23.14</td>
          </tr>
        ))}
    </tbody>
  </table>
</div>
      </div>

      {/* Şirket İçi Performans Grafiği */}
      <div className="bg-[#0e0e0e] rounded-2xl p-6">
  {/* Header */}
<div className="flex flex-col lg:flex-row md:flex-row lg:items-center md:items-center justify-between gap-3 mb-6">
  {/* Title */}
  <h3 className="text-base sm:text-lg font-semibold text-white text-center lg:text-left">
    Şirket İçi Performans Grafiği - En İyi 5 Fon
  </h3>

  {/* Button Group */}
  <div className="flex gap-2 text-xs sm:text-sm overflow-x-auto no-scrollbar w-full lg:w-auto justify-center lg:justify-end">
    {["1 hafta", "1 ay", "6 ay", "2025", "1 Yıl", "5 Yıl"].map((label, idx) => (
      <button
        key={idx}
        className="px-3 py-1.5 whitespace-nowrap rounded-full border border-[#ffffff1f] text-gray-400 hover:text-white hover:border-gray-500 transition-colors duration-200"
      >
        {label}
      </button>
    ))}
  </div>
</div>


  {/* Chart-like layout */}
  <div className="mt-4 border-t border-[#1a1a1a] divide-y divide-[#1a1a1a]">
    {[
      { name: "Teknoloji Fonu", value: 95 },
      { name: "Global Hisse Senedi", value: 82 },
      { name: "Yapay Zeka Fonu", value: 68 },
      { name: "Portföy Fonu", value: 50 },
      { name: "Sürdürülebilirlik Fonu", value: 35 },
    ].map((fund, i) => (
      <div key={i} className="py-3">
        <div className="flex justify-between text-gray-300 text-sm mb-2">
          <span>{fund.name}</span>
          <span className="text-white font-semibold">{fund.value.toFixed(2)}</span>
        </div>

        {/* Flat blue bar (no rounding) */}
        <div className="relative w-full h-4 bg-[#121212]">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#0047FF] to-[#00C6FF]"
            style={{ width: `${fund.value}%` }}
          ></div>
        </div>
      </div>
    ))}
  </div>

  {/* Bottom axis labels */}
  <div className="flex justify-between text-xs text-gray-500 mt-6 border-t border-[#1a1a1a] pt-3">
    {["Nis", "May", "Haz", "Tem", "Ağu", "Eyl"].map((month, i) => (
      <span key={i}>{month}</span>
    ))}
  </div>
</div>

    </div>
  );
};

export default CompanyComparisonCard;
