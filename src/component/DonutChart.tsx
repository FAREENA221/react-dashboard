import React, { useMemo, useState } from "react";

type Sector = { label: string; value: number };
type DonutData = {
  sectors: Sector[];
  topFunds: any[];
};

type Props = { data: DonutData };

const palette = ["#FF5A5A", "#FFCF6B", "#00E6A8", "#6BCBFF", "#C6A0FF"];

const DonutChart: React.FC<Props> = ({ data }) => {
  const total = data.sectors.reduce((s, x) => s + x.value, 0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const arcs = useMemo(() => {
    let start = 0;
    return data.sectors.map((s, idx) => {
      const angle = (s.value / total) * Math.PI * 2;
      const arc = { start, end: start + angle, idx, s };
      start += angle;
      return arc;
    });
  }, [data, total]);

  const size = 220;
  const radius = size / 2;
  const innerRadius = radius * 0.58;

  function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
    return {
      x: cx + r * Math.cos(angle - Math.PI / 2),
      y: cy + r * Math.sin(angle - Math.PI / 2)
    };
  }

  function arcPath(cx: number, cy: number, r: number, innerR: number, startAngle: number, endAngle: number) {
    const startOuter = polarToCartesian(cx, cy, r, endAngle);
    const endOuter = polarToCartesian(cx, cy, r, startAngle);
    const startInner = polarToCartesian(cx, cy, innerR, endAngle);
    const endInner = polarToCartesian(cx, cy, innerR, startAngle);
    const largeArc = endAngle - startAngle <= Math.PI ? "0" : "1";

    return [
      `M ${startOuter.x} ${startOuter.y}`,
      `A ${r} ${r} 0 ${largeArc} 0 ${endOuter.x} ${endOuter.y}`,
      `L ${endInner.x} ${endInner.y}`,
      `A ${innerR} ${innerR} 0 ${largeArc} 1 ${startInner.x} ${startInner.y}`,
      "Z"
    ].join(" ");
  }

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <g transform={`translate(${radius},${radius})`}>
          {arcs.map((a, i) => (
            <path
              key={i}
              d={arcPath(0, 0, radius - 2, innerRadius, a.start, a.end)}
              fill={palette[i % palette.length]}
              opacity={hoverIndex === null ? 1 : hoverIndex === i ? 1 : 0.35}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              style={{ cursor: "pointer", transition: "opacity .2s" }}
            />
          ))}
          <circle r={innerRadius - 2} fill="#0b0b0b" />
          <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" className="text-white" style={{ fontSize: 14, fill: "#fff" }}>
            Sector Risk
          </text>
        </g>
      </svg>

     <div className="mt-6 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
  {data.sectors.map((s, i) => {
    const pct = ((s.value / total) * 100).toFixed(2);

    // Define nice gradient backgrounds similar to your image
    const gradientMap = [
      "linear-gradient(135deg, #1C4E3F 0%, #133B2E 100%)", // En Düşük
      "linear-gradient(135deg, #0A4B5E 0%, #0C3345 100%)", // Düşük
      "linear-gradient(135deg, #0B285A 0%, #0C1F3B 100%)", // Orta
      "linear-gradient(135deg, #5A420B 0%, #2F2605 100%)", // Yüksek
      "linear-gradient(135deg, #5E1C26 0%, #3A1017 100%)", // Çok Yüksek
    ];

    return (
      <div
        key={i}
        className="flex flex-col justify-center items-center text-center rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300"
        style={{
          background: gradientMap[i % gradientMap.length],
          boxShadow: hoverIndex === i
            ? "0 0 12px rgba(255,255,255,0.15)"
            : "0 0 8px rgba(0,0,0,0.25)",
          cursor: "pointer",
        }}
        onMouseEnter={() => setHoverIndex(i)}
        onMouseLeave={() => setHoverIndex(null)}
      >
        <span className="text-gray-200 text-sm mb-1">{s.label}</span>
        <span className="text-white text-xl font-bold">{pct}%</span>
      </div>
    );
  })}
</div>
    </div>
  );
};

export default DonutChart;
