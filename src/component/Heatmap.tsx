import React from "react";

type HeatmapProps = {
  data: {
    metrics: { fund: string; values: number[] }[];
    scale: [number, number];
  };
};

// Convert numeric value to a blue-based color tone (0 → dark blue, max → white)
function valueToBlue(v: number, min: number, max: number) {
  const ratio = (v - min) / (max - min || 1);
  const blue = Math.round(255 - ratio * 80);
  const green = Math.round(150 + ratio * 100);
  const red = Math.round(100 + ratio * 100);
  return `rgb(${red},${green},${blue})`;
}

const Heatmap: React.FC<HeatmapProps> = ({ data }) => {
  const allValues = data.metrics.flatMap((m) => m.values);
  const min = Math.min(...allValues, data.scale[0]);
  const max = Math.max(...allValues, data.scale[1]);

  return (
    <div className="relative rounded-2xl p-4 sm:p-6 bg-[#0b0f19] flex flex-col lg:flex-row items-center">
      {/* Left side table */}
      <div className="overflow-x-auto flex-1 w-full">
        <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 text-center lg:text-left">
          Risk Metrikleri Karşılaştırması
        </h3>

        <table className="min-w-full border-separate border-spacing-1 text-xs sm:text-sm">
          <tbody>
            {data.metrics.map((row, ri) => (
              <tr key={ri}>
                <td className="text-gray-300 font-medium px-2 py-2 whitespace-nowrap text-left">
                  {row.fund}
                </td>
                {row.values.map((v, ci) => (
                  <td key={ci} className="p-[2px] text-center">
                    <div
                      className="w-16 sm:w-20 md:w-24 h-7 sm:h-8 flex items-center justify-center text-[10px] sm:text-xs font-semibold rounded"
                      style={{
                        backgroundColor: valueToBlue(v, min, max),
                        color: "#f2f2f2",
                      }}
                    >
                      {v.toFixed(2)}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Gradient Scale Bar (Responsive) */}
      <div className="mt-6 lg:mt-0 lg:ml-6 w-full lg:w-auto flex flex-col lg:flex-col-reverse items-center">
        {/* Gradient Bar */}
        <div
          className="
            w-full h-3 sm:h-4 rounded-md
            lg:w-6 lg:h-72
            transition-all duration-300
          "
          style={{
            background:
              "linear-gradient(to right, #00FF00 0%, #FFFF00 50%, #FF0000 100%)",
            ...(window.innerWidth >= 1024 && {
              background:
                "linear-gradient(to top, #00FF00 0%, #FFFF00 50%, #FF0000 100%)",
            }),
          }}
        />

        {/* Scale Labels */}
        <div className="flex lg:flex-col justify-between text-gray-400 text-[10px] sm:text-xs mt-2 w-full lg:w-auto px-1">
          <span>{max.toFixed(2)}</span>
          <span className="hidden lg:inline">{((max + min) / 2).toFixed(2)}</span>
          <span>{min.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Heatmap;
