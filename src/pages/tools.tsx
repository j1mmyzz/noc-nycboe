import { useState } from "react";
import Layout from "./components/ui/layout";
import { NextPage } from "next";
import Dashboard from "./components/tools/Dashboard";
import ServiceTools from "./components/tools/ServiceTools";

const Tools: NextPage = () => {
  const [showDashboard, setShowDashboard] = useState(true);

  const handleDashboardClick = () => {
    setShowDashboard(true);
  };

  const handleServiceToolsClick = () => {
    setShowDashboard(false);
  };

  return (
    <Layout title="Tools">
      {/*These are the buttons at the top of the page under the header & banner. When clicked it'll render Dthe Dashboard or ServiceTools component found in src/components/tools*/}
      <div className="flex justify-center gap-4 mt-10">
        <button
          className={`border p-2 rounded-md ${
            showDashboard ? "bg-cyan-500 text-white" : "border-gray-500"
          }`}
          onClick={handleDashboardClick}
        >
          NOC Dashboards
        </button>
        <button
          className={`border p-2 rounded-md ${
            !showDashboard ? "bg-cyan-500 text-white" : "border-gray-500"
          }`}
          onClick={handleServiceToolsClick}
        >
          NOC Service Tools
        </button>
      </div>
      <div className="p-48 pt-10 pb-20">
        {showDashboard ? <Dashboard /> : <ServiceTools />}
      </div>
    </Layout>
  );
};

export default Tools;
