import Image from "next/image";
export const dashboardItems = [
  {
    src: "/dashboard/noc_school_dashboard.png",
    alt: "NOC School Dashboard",
    sizes: "100",
    text: "NOC School Dashboard",
    link: "http://nocview.nycboe.net/",
  },
  {
    src: "/dashboard/SPOC_Network_Operations_center.png",
    alt: "SPOC Network Operations Center",
    sizes: "100vw",
    text: "SPOC Network Operations Center",
    link: "http://spocnoc.nycboe.net/",
  },
  {
    src: "/dashboard/Gama_Monitoring_Dashboard.png",
    alt: "GAMA Monitoring Dashboard",
    sizes: "100vw",
    text: "GAMA Monitoring Dashboard",
    link: "http://nocapps2.nycboe.net/gama/",
  },
  {
    src: "/dashboard/DFS_monitoring_system.jpg",
    alt: "DFS Monitoring System",
    sizes: "100vw",
    text: "DFS Monitoring System",
    link: "http://nocapps3.nycboe.net/DFSDashboard/",
  },
  {
    src: "/dashboard/NYC_SCHOOLS_ACCOUNT.png",
    alt: "NYC Schools Account",
    sizes: "100vw",
    text: "NYC Schools Account",
    link: "http://nocapps2.nycboe.net/familyportal/",
  },
  {
    src: "/dashboard/SECURITY_ACCESS_MANAGEMENT.png",
    alt: "Security Access Management",
    sizes: "100vw",
    text: "Security Access Management",
    link: "http://nocapps2.nycboe.net/SecurityAccessManagement/",
  },
  {
    src: "/dashboard/dwdm_monitoring_system.jpg",
    alt: "DWDM Monitoring System",
    sizes: "100vw",
    text: "DWDM Monitoring System",
    link: "http://nocapps3.nycboe.net/DWDMDashboard/",
  },
  {
    src: "/dashboard/noc-bandwidth-icon.png",
    alt: "NOC Bandwidth Dashboard",
    sizes: "100vw",
    text: "NOC Bandwidth Dashboard",
    link: "http://nocbandwidth.nycboe.net/",
  },
  {
    src: "/dashboard/VPN.png",
    alt: "VPN",
    sizes: "100vw",
    text: "VPN",
    link: "http://nocapps4.nycboe.net/vpn/",
  },
  {
    src: "/dashboard/sesis_big.png",
    alt: "SESIS Monitoring Dashboard",
    sizes: "100vw",
    text: "SESIS Monitoring Dashboard",
    link: "http://nocapps2.nycboe.net/sesis",
  },
  {
    src: "/dashboard/myschools.jpg",
    alt: "NYC MySchools",
    sizes: "100vw",
    text: "NYC MySchools",
    link: "https://www.myschools.nyc/en/",
  },
  {
    src: "/dashboard/cybershift.png",
    alt: "Cybershift Monitoring Dashboard",
    sizes: "100vw",
    text: "Cybershift Monitoring Dashboard",
    link: "http://nocapps2.nycboe.net/cybershift/",
  },
  {
    src: "/dashboard/FINANCE.png",
    alt: "Finance Monitoring Dashboard",
    sizes: "100vw",
    text: "Finance Monitoring Dashboard",
    link: "http://nocapps2.nycboe.net/finance",
  },
  {
    src: "/dashboard/web servcies.jpg",
    alt: "Web Services Monitoring System",
    sizes: "100vw",
    text: "Web Services Monitoring System",
    link: "http://nocapps3.nycboe.net/WebServiceDashboard/",
  },
  {
    src: "/dashboard/sql.png",
    alt: "SQL Servers Dashboard",
    sizes: "100vw",
    text: "SQL Servers Dashboard",
    link: "http://nocapps2.nycboe.net/sql/",
  },
  {
    src: "/dashboard/AD-2.png",
    alt: "AD Monitoring",
    sizes: "100vw",
    text: "AD Monitoring",
    link: "http://nocapps4.nycboe.net/ad/",
  },
  {
    src: "/dashboard/video icon.jpg",
    alt: "IPDVS Dashboard",
    sizes: "100vw",
    text: "IPDVS Dashboard",
    link: "http://nocconfig.nycboe.net/ipdvs",
  },
  {
    src: "/dashboard/VLan.jpg",
    alt: "VLAN Change",
    sizes: "100vw",
    text: "VLAN Change",
    link: "http://nocconfig.nycboe.net/",
  },
  {
    src: "/dashboard/web proxy.png",
    alt: "Content Delivery Infrastructure Dashboard",
    sizes: "100vw",
    text: "Content Delivery Infrastructure Dashboard",
    link: "http://nocapps3.nycboe.net/ProxyDashboard/",
  },
  {
    src: "/dashboard/Storage icon.png",
    alt: "Storage Dashboard",
    sizes: "100vw",
    text: "Storage Dashboard",
    link: "http://nocapps3.nycboe.net/StorageDashboard/",
  },
  {
    src: "/dashboard/email_logo.png",
    alt: "Exchange Infrastructure Dashboard",
    sizes: "100vw",
    text: "Exchange Infrastructure Dashboard",
    link: "http://nocapps3.nycboe.net/ExchangeDashboard",
  },
  {
    src: "/dashboard/Cognos logo.png",
    alt: "Cognos Monitoring Dashboard",
    sizes: "100vw",
    text: "Cognos Monitoring Dashboard",
    link: "http://nocapps2.nycboe.net/cognos",
  },
  {
    src: "/dashboard/LUWlogo.png",
    alt: "LUW Monitoring Dashboard",
    sizes: "100vw",
    text: "LUW Monitoring Dashboard",
    link: "http://nocapps2.nycboe.net/LUW/",
  },
  {
    src: "/dashboard/NTP.png",
    alt: "NTP Monitoring Dashboard",
    sizes: "100vw",
    text: "NTP Monitoring Dashboard",
    link: "http://nocapps4.nycboe.net/ntp",
  },
  {
    src: "/dashboard/Endpoint logo.png",
    alt: "Endpoint Security Monitoring Dashboard",
    sizes: "100vw",
    text: "Endpoint Security Monitoring Dashboard",
    link: "http://nocapps2.nycboe.net/endpointsecurity",
  },
];
const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-4">
      {dashboardItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center bg-gray-slate shadow-lg rounded-lg p-2"
        >
          <a href={item.link} target="_blank">
            <Image
              src={item.src}
              alt={item.alt}
              width={150}
              height={100}
              sizes={item.sizes}
            />
          </a>
          <p className="text-center">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
