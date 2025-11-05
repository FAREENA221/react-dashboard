import React from "react";

type Props = {
  mode: "sector" | "company" | "donut";
  setMode: (m: "sector" | "company" | "donut") => void;
};

const TopToggle: React.FC<Props> = ({ mode, setMode }) => {
  return (
    <div className="mt-4 w-full overflow-x-auto">
      {/* Scrollable container */}
      <div className="flex gap-3 sm:gap-6 min-w-max px-2 sm:px-0">
        {/* Normal Dashboard */}
        <button
          onClick={() => setMode("sector")}
          className={`whitespace-nowrap px-4 py-2 cursor-pointer text-sm sm:text-base rounded-full border transition-all duration-300 
            ${
              mode === "sector"
                ? "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 text-white shadow-lg border-transparent"
                : "text-gray-400 border border-[#ffffff3d] hover:border-gray-400 hover:text-white"
            }`}
        >
          Normal Dashboard
        </button>

        {/* Heatmap Table */}
        <button
          onClick={() => setMode("company")}
          className={`whitespace-nowrap px-4 py-2 cursor-pointer text-sm sm:text-base rounded-full border transition-all duration-300 
            ${
              mode === "company"
                ? "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 text-white shadow-lg border-transparent"
                : "text-gray-400 border border-[#ffffff3d] hover:border-gray-400 hover:text-white"
            }`}
        >
          Heatmap Table
        </button>

        {/* Donut Chart */}
        <button
          onClick={() => setMode("donut")}
          className={`whitespace-nowrap px-4 py-2 cursor-pointer text-sm sm:text-base rounded-full border transition-all duration-300 
            ${
              mode === "donut"
                ? "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 text-white shadow-lg border-transparent"
                : "text-gray-400 border border-[#ffffff3d] hover:border-gray-400 hover:text-white"
            }`}
        >
          Donut Chart
        </button>
      </div>
    </div>
  );
};

export default TopToggle;
