import React, { useState } from "react";
import { heatmap } from "./data/heatmapData";
import { donutData } from "./data/donutData";
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import TopToggle from "./component/TopToggle";
import CompanyComparisonCard from "./component/CompanyComparisonCard";
import Heatmap from "./component/Heatmap";
import DonutChart from "./component/DonutChart";
import TopFundsTable from "./component/TopFundsTable";

const App: React.FC = () => {
  const [mode, setMode] = useState<"sector" | "company" | "donut">("sector");

  return (
    <div className="min-h-screen lg:flex md:flex text-white bg-black">
      <Sidebar />
      <div className="flex-1 p-6 md:p-8 bg-black border-l border-[#ffffff5c]">
        <Header />
        <TopToggle mode={mode} setMode={setMode} />
        <main className="mt-6 space-y-6">
           {mode === "sector" && <CompanyComparisonCard />}

          {mode === "company" && 
            <div className="bg-[#0b0f19] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4">Risk Metrics Heatmap</h3>
              <Heatmap data={heatmap} />
            </div> }
            {mode === "donut" && 
            <div className="bg-[#0e0e0e] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4">Sector Risk Analysis</h3>
              <DonutChart data={donutData} />
              <div className="mt-6">
                <TopFundsTable topFunds={donutData.topFunds} />
              </div>
            </div>}
        </main>
      </div>
    </div>
  );
};

export default App;