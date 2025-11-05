import React from "react";

type Props = {
  title: string;
  value: string;
  subtitle?: string;
};

const StatsBox: React.FC<Props> = ({ title, value, subtitle }) => {
  return (
    <div className="bg-gradient-to-r from-[#0b1221] to-[#071120] rounded-2xl p-6 flex flex-col justify-between">
      <div>
        <div className="text-xs text-gray-400">{title}</div>
        <div className="lg:text-3xl md:text-3xl font-bold mt-2 text-[18px]">{value}</div>
      </div>
      {subtitle && <div className="text-sm text-gray-400 mt-4">{subtitle}</div>}
    </div>
  );
};

export default StatsBox;
