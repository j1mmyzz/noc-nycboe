import Image from "next/image";
export const dashboardItems = [
  {
    src: "/dashboard/noc_school_dashboard.png",
    alt: "NOC School Dashboard",
    sizes: "100",
    text: "NOC School Dashboard",
  },
  {
    src: "/dashboard/SPOC_Network_Operations_center.png",
    alt: "SPOC Network Operations Center",
    sizes: "100vw",
    text: "SPOC Network Operations Center",
  },
  {
    src: "/dashboard/Gama_Monitoring_Dashboard.png",
    alt: "GAMA Monitoring Dashboard",
    sizes: "100vw",
    text: "GAMA Monitoring Dashboard",
  },
  {
    src: "/dashboard/DFS_monitoring_system.jpg",
    alt: "DFS Monitoring System",
    sizes: "100vw",
    text: "DFS Monitoring System",
  },
  {
    src: "/dashboard/NYC_SCHOOLS_ACCOUNT.png",
    alt: "NYC Schools Account",
    sizes: "100vw",
    text: "NYC Schools Account",
  },
  {
    src: "/dashboard/SECURITY_ACCESS_MANAGEMENT.png",
    alt: "Security Access Management",
    sizes: "100vw",
    text: "Security Access Management",
  },
  {
    src: "/dashboard/dwdm_monitoring_system.jpg",
    alt: "DWDM Monitoring System",
    sizes: "100vw",
    text: "DWDM Monitoring System",
  },
  {
    src: "/dashboard/noc-bandwidth-icon.png",
    alt: "NOC Bandwidth Dashboard",
    sizes: "100vw",
    text: "NOC Bandwidth Dashboard",
  },
  {
    src: "/dashboard/VPN.png",
    alt: "VPN",
    sizes: "100vw",
    text: "VPN",
  },
  {
    src: "/dashboard/sesis_big.png",
    alt: "SESIS Monitoring Dashboard",
    sizes: "100vw",
    text: "SESIS Monitoring Dashboard",
  },
  {
    src: "/dashboard/myschools.jpg",
    alt: "NYC MySchools",
    sizes: "100vw",
    text: "NYC MySchools",
    link: "https://www.myschools.nyc/en/", //ADD A LINK TO EVERYTHING
  },
  {
    src: "/dashboard/cybershift.png",
    alt: "Cybershift Monitoring Dashboard",
    sizes: "100vw",
    text: "Cybershift Monitoring Dashboard",
  },
  {
    src: "/dashboard/FINANCE.png",
    alt: "Finance Monitoring Dashboard",
    sizes: "100vw",
    text: "Finance Monitoring Dashboard",
  },
  {
    src: "/dashboard/web servcies.jpg",
    alt: "Web Services Monitoring System",
    sizes: "100vw",
    text: "Web Services Monitoring System",
  },
  {
    src: "/dashboard/sql.png",
    alt: "SQL Servers Dashboard",
    sizes: "100vw",
    text: "SQL Servers Dashboard",
  },
  {
    src: "/dashboard/AD-2.png",
    alt: "AD Monitoring",
    sizes: "100vw",
    text: "AD Monitoring",
  },
  {
    src: "/dashboard/video icon.jpg",
    alt: "IPDVS Dashboard",
    sizes: "100vw",
    text: "IPDVS Dashboard",
  },
  {
    src: "/dashboard/VLan.jpg",
    alt: "VLAN Change",
    sizes: "100vw",
    text: "VLAN Change",
  },
  {
    src: "/dashboard/web proxy.png",
    alt: "Content Delivery Infrastructure Dashboard",
    sizes: "100vw",
    text: "Content Delivery Infrastructure Dashboard",
  },
  {
    src: "/dashboard/Storage icon.png",
    alt: "Storage Dashboard",
    sizes: "100vw",
    text: "Storage Dashboard",
  },
  {
    src: "/dashboard/email_logo.png",
    alt: "Exchange Infrastructure Dashboard",
    sizes: "100vw",
    text: "Exchange Infrastructure Dashboard",
  },
  {
    src: "/dashboard/Cognos logo.png",
    alt: "Cognos Monitoring Dashboard",
    sizes: "100vw",
    text: "Cognos Monitoring Dashboard",
  },
  {
    src: "/dashboard/LUWlogo.png",
    alt: "LUW Monitoring Dashboard",
    sizes: "100vw",
    text: "LUW Monitoring Dashboard",
  },
  {
    src: "/dashboard/NTP.png",
    alt: "NTP Monitoring Dashboard",
    sizes: "100vw",
    text: "NTP Monitoring Dashboard",
  },
  {
    src: "/dashboard/Endpoint logo.png",
    alt: "Endpoint Security Monitoring Dashboard",
    sizes: "100vw",
    text: "Endpoint Security Monitoring Dashboard",
  },
];
const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 gap-4">
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
