import Image from "next/image";
import Layout from "./components/layout";
import { NextPage } from "next";

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
          <div className="grid grid-col-1 lg:grid-cols-5 md:grid-col-4 gap-4">
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/dashboard/noc_school_dashboard.png"
                alt="tool"
                width={50}
                height={50}
                sizes="100"
                style={{ width: "60%", height: "60%" }}
              />

              <p className="text-center">NOC School Dashoard</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <Image
                src="/dashboard/SPOC_Network_Operations_center.png"
                alt="tool"
                width={50}
                height={50}
                sizes="100vw"
                style={{ width: "60%", height: "60%" }}
              />
              <p className="text-center">SPOC Network Operations Center</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <Image
                src="/dashboard/Gama_Monitoring_Dashboard.png"
                alt="tool"
                width={50}
                height={50}
                sizes="100vw"
                style={{ width: "60%", height: "60%" }}
              />
              <p className="text-center">GAMA Monitoring Dashboard</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <Image
                src="/dashboard/DFS_monitoring_system.jpg"
                alt="tool"
                width={50}
                height={50}
                sizes="100vw"
                style={{ width: "60%", height: "60%" }}
              />
              <p className="text-center">DFS Monitoring System</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <Image
                src="/dashboard/NYC_SCHOOLS_ACCOUNT.png"
                alt="tool"
                width={50}
                height={50}
                sizes="100vw"
                style={{ width: "60%", height: "60%" }}
              />
              <p className="text-center">NYC Schools Account</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <Image
                src="/dashboard/SECURITY_ACCESS_MANAGEMENT.png"
                alt="tool"
                width={100}
                height={100}
                sizes="100vw"
                style={{ width: "60%", height: "60%" }}
              />
              <p className="text-center">Security Access Management</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <Image
                src="/dashboard/dwdm_monitoring_system.jpg"
                alt="tool"
                width={50}
                height={50}
                sizes="100vw"
                style={{ width: "60%", height: "60%" }}
              />
              <p className="text-center">DWDM Monitoring System</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <Image
                src="/dashboard/noc-bandwidth-icon.png"
                alt="tool"
                width={50}
                height={50}
                sizes="100vw"
                style={{ width: "60%", height: "60%" }}
              />
              <p className="text-center">NOC Bandwidth Dashboard</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <Image
                src="/dashboard/VPN.png"
                alt="tool"
                width={50}
                height={50}
                sizes="100vw"
                style={{ width: "60%", height: "60%" }}
              />
              <p className="text-center">VPN</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <Image
                src="/dashboard/sesis_big.png"
                alt="tool"
                width={50}
                height={50}
                sizes="100vw"
                style={{ width: "60%", height: "60%" }}
              />
              <p className="text-center">SESIS Monitoring Dashboard</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <Image
                src="/dashboard/myschools.jpg"
                alt="tool"
                width={50}
                height={50}
                sizes="100vw"
                style={{ width: "60%", height: "60%" }}
              />
              <p className="text-center">NYC MySchools</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <Image
                src="/dashboard/cybershift.png"
                alt="tool"
                width={100}
                height={100}
                sizes="100vw"
                style={{ width: "60%", height: "60%" }}
              />
              <p className="text-center">Cybershift Monitoring Dashboard</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <Image
                src="/dashboard/FINANCE.png"
                alt="tool"
                width={50}
                height={50}
                sizes="100vw"
                style={{ width: "60%", height: "60%" }}
              />
              <p className="text-center">Finance Monitoring Dashboard</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <Image
                src="/dashboard/web servcies.jpg"
                alt="tool"
                width={50}
                height={50}
                sizes="100vw"
                style={{ width: "60%", height: "60%" }}
              />
              <p className="text-center">Web Services Monitoring System</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <Image
                src="/dashboard/sql.png"
                alt="tool"
                width={50}
                height={50}
                sizes="100vw"
                style={{ width: "60%", height: "60%" }}
              />
              <p className="text-center">SQL Servers Dashboard</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/dashboard/AD-2.png"
                alt="tool"
                width={50}
                height={50}
                sizes="100vw"
                style={{ width: "60%", height: "60%" }}
              />
              <p className="text-center">AD Monitoring</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <Image
                src="/dashboard/video icon.jpg"
                alt="tool"
                width={50}
                height={50}
                sizes="100vw"
                style={{ width: "60%", height: "60%" }}
              />
              <p className="text-center">IPDVS Dashboard</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <Image
                src="/dashboard/VLan.jpg"
                alt="tool"
                width={50}
                height={50}
                sizes="100vw"
                style={{ width: "60%", height: "60%" }}
              />
              <p className="text-center">VLAN Change</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <Image
                src="/dashboard/web proxy.png"
                alt="tool"
                width={50}
                height={50}
                sizes="100vw"
                style={{ width: "60%", height: "60%" }}
              />
              <p className="text-center">
                Content Delivery Infrastructure Dashboard
              </p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <Image
                src="/dashboard/Storage icon.png"
                alt="tool"
                width={50}
                height={50}
                sizes="100vw"
                style={{ width: "60%", height: "60%" }}
              />
              <p className="text-center">Storage Dashboard</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/dashboard/email_logo.png"
                alt="tool"
                width={50}
                height={50}
                sizes="100vw"
                style={{ width: "60%", height: "60%" }}
              />
              <p className="text-center">Exchange Infrastructure Dashboard</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <Image
                src="/dashboard/Cognos logo.png"
                alt="tool"
                width={50}
                height={50}
                sizes="100vw"
                style={{ width: "60%", height: "60%" }}
              />
              <p className="text-center">Cognos Monitoring Dashboard</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/dashboard/LUWlogo.png"
                alt="tool"
                width={50}
                height={50}
                sizes="100vw"
                style={{ width: "60%", height: "60%" }}
              />
              <p className="text-center">LUW Monitoring Dashboard</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <Image
                src="/dashboard/NTP.png"
                alt="tool"
                width={50}
                height={50}
                sizes="100vw"
                style={{ width: "60%", height: "60%" }}
              />
              <p className="text-center">NTP Monitoring Dashboard</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/dashboard/Endpoint logo.png"
                alt="tool"
                width={50}
                height={50}
                sizes="100vw"
                style={{ width: "70%", height: "70%" }}
              />
              <p className="text-center">
                Endpoint Security Monitoring Dashboard
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Tools;
