import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import Font Awesome Search icon

type Fund = {
  name: string;
  company: string;
  category: string;
  "1YReturn": number;
  "3YReturn": number;
  risk: string;
};

const TopFundsTable: React.FC<{ topFunds: Fund[] }> = ({ topFunds }) => {
  const [sortKey, setSortKey] = useState<"1YReturn" | "3YReturn">("1YReturn");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFunds = topFunds.filter((fund) =>
    fund.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    fund.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    fund.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sorted = [...filteredFunds].sort((a, b) => b[sortKey] - a[sortKey]);

  return (
    <div className="w-full">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div className="text-sm text-gray-400">Top Performing Funds</div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSortKey("1YReturn")}
            className={`px-3 py-1 rounded transition ${
              sortKey === "1YReturn" ? "bg-white/10 text-white" : "text-gray-400"
            }`}
          >
            Sort 1Y
          </button>
          <button
            onClick={() => setSortKey("3YReturn")}
            className={`px-3 py-1 rounded transition ${
              sortKey === "3YReturn" ? "bg-white/10 text-white" : "text-gray-400"
            }`}
          >
            Sort 3Y
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-4">
        <FaSearch
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={16}
        />
        <input
          type="text"
          placeholder="Search funds, company, or category..."
          className="w-full pl-10 pr-3 py-2 bg-transparent border border-gray-600 rounded-md text-sm text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[600px]">
          <thead>
            <tr className="text-gray-400 text-left border-b border-gray-700">
              <th className="py-2">Fund</th>
              <th>Company</th>
              <th>Category</th>
              <th className="text-right">1Y</th>
              <th className="text-right">3Y</th>
              <th className="text-right">Risk</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((f, i) => (
              <tr
                key={i}
                className="hover:bg-white/5 transition-colors border-b border-gray-800"
              >
                <td className="py-2">{f.name}</td>
                <td>{f.company}</td>
                <td>{f.category}</td>
                <td className="text-right">{f["1YReturn"].toFixed(2)}%</td>
                <td className="text-right">{f["3YReturn"].toFixed(2)}%</td>
                <td className="text-right">{f.risk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopFundsTable;
