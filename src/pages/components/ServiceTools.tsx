import Image from "next/image";
export const dashboardItems = [
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
    src: "/dashboard/Storage icon.png",
    alt: "Storage Dashboard",
    sizes: "100vw",
    text: "Storage Dashboard",
  },
];

const ServiceTools: React.FC = () => {
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

export default ServiceTools;
