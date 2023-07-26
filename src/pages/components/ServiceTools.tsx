import Image from "next/image";
export const dashboardItems = [
  {
    src: "/service tools/netscoutLogo.png",
    alt: "Netscout nGeniusONE",
    sizes: "100vw",
    text: "Netscout nGeniusONE",
    link: "https://netscout.nycboe.net/",
  },
  {
    src: "/service tools/splunkLogo.png",
    alt: "SPLUNK Enterprise",
    sizes: "100vw",
    text: "SPLUNK Enterprise",
    link: "http://splunkitsi.nycboe.net/",
  },
  {
    src: "/service tools/riverbedLogo.jpg",
    alt: "Riverbed SteelCentral NetProfiler",
    sizes: "100vw",
    text: "Riverbed SteelCentral NetProfiler",
    link: "https://netim.nycboe.net:8543/vnes/",
  },
  {
    src: "/service tools/config files.jpg",
    alt: "School MDF Configuration Files",
    sizes: "100vw",
    text: "School MDF Configuration Files",
    link: "http://10.2.134.70/school/config",
  },
  {
    src: "/service tools/cactischool.png",
    alt: "School CACTI - Traffic Monitoring Tool",
    sizes: "100vw",
    text: "School CACTI - Traffic Monitoring Tool",
    link: "http://schoolcacti.nycboe.net/cacti/graph_view.php",
  },
  {
    src: "/service tools/cacticentral.png",
    alt: "Central CACTI - Traffic Monitoring Tool",
    sizes: "100vw",
    text: "Central CACTI - Traffic Monitoring Tool",
    link: "http://centralcacti.nycboe.net/cacti/graph_view.php?action=tree&tree_id=2&leaf_id=9",
  },
  {
    src: "/service tools/Cisco.gif",
    alt: "Central NAM",
    sizes: "100vw",
    text: "Central NAM",
  },
  {
    src: "/service tools/Cisco.gif",
    alt: "School NAM",
    sizes: "100vw",
    text: "School NAM",
  },
  {
    src: "/service tools/Cisco.gif",
    alt: "Sonet NAM",
    sizes: "100vw",
    text: "Sonet NAM",
  },
  {
    src: "/service tools/miscellaneous tools.jpg",
    alt: "NOC Miscellaneous Tools",
    sizes: "100vw",
    text: "NOC Miscellaneous Tools",
    link: "http://10.251.24.21/ticker.html",
  },
];

const ServiceTools: React.FC = () => {
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
          {/* Add the dropdown for cisco later */}
        </div>
      ))}
    </div>
  );
};

export default ServiceTools;
