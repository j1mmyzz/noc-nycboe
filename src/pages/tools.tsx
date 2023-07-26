import Image from "next/image";
import Layout from "./components/layout";
import { NextPage } from "next";
import Dashboard from "./components/Dashboard";

const Tools: NextPage = () => {
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
          <button className="border border-gray-500 p-2 rounded-md hover:bg-cyan-500 hover:text-white">
            NOC Dashboards
          </button>
          <button className="border border-gray-500 p-2 rounded-md hover:bg-cyan-500 hover:text-white">
            NOC Service Tools
          </button>
        </div>
        <div className="p-48 pt-10">
          {/* DashBoard */}
          <Dashboard />
        </div>
      </Layout>
    </>
  );
};

export default Tools;
