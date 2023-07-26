import Image from "next/image";
import { useState } from "react";
import Layout from "./components/layout";
import { NextPage } from "next";
import Dashboard from "./components/Dashboard";
import ServiceTools from "./components/ServiceTools";

const Tools: NextPage = () => {
  const [showDashboard, setShowDashboard] = useState(true);

  const handleDashboardClick = () => {
    setShowDashboard(true);
  };

  const handleServiceToolsClick = () => {
    setShowDashboard(false);
  };

  return (
    <>
      <Layout title="Tools">
        <Image
          className=""
          src="/banners/tools-banner.png"
          alt="nyc logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
        />
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
        <div className="p-48 pt-10">
          {showDashboard ? <Dashboard /> : <ServiceTools />}
        </div>
      </Layout>
    </>
  );
};

export default Tools;
