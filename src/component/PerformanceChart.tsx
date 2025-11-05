import React from "react";

/**
 * Simple sparkline / area chart (SVG) to match PDF look.
 * Data is mocked to demonstrate implementation.
 */

const data = [10, 12, 9, 14, 15, 13, 16];

const PerformanceChart: React.FC = () => {
  const width = 400;
  const height = 110;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((d - min) / (max - min || 1)) * height;
    return `${x},${y}`;
  }).join(" ");

  const areaPath = `M0,${height} L${points} L${width},${height} Z`;

  return (
    <div className="bg-[#0e0e0e] rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-xs text-gray-400">Performance</div>
          <div className="text-lg font-semibold">1Y Return</div>
        </div>
        <div className="text-green-400 font-semibold">+12.6%</div>
      </div>
      <svg width="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMinYMin meet">
        <path d={areaPath} fill="rgba(0,230,168,0.08)" />
        <polyline points={points} fill="none" stroke="#00e6a8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};

export default PerformanceChart;
