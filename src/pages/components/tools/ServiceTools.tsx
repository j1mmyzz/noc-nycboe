import Image from "next/image";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
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

function isNam(name: string) {
  if (name === "Central NAM") {
    return (
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {"Select NAM"}
        </MenuButton>
        <MenuList overflowY={"auto"} maxHeight={"300px"}>
          <a href="https://10.2.100.21/" target="_blank">
            <MenuItem>S2MT6509A-NAM</MenuItem>
          </a>
          <a href="https://10.2.100.22/" target="_blank">
            <MenuItem>S2MT6509B-NAM</MenuItem>
          </a>
          <a href="https://10.2.100.23/" target="_blank">
            <MenuItem>S2MT6509SERVER-A-NAM</MenuItem>
          </a>
          <a href="https://10.2.100.24/" target="_blank">
            <MenuItem>S2MT6509SERVER-B-NAM</MenuItem>
          </a>
          <a href="https://10.3.221.5/" target="_blank">
            <MenuItem>S335A6506A-NAM</MenuItem>
          </a>
          <a href="https://10.0.21.98/" target="_blank">
            <MenuItem>S65C6509A-NAM</MenuItem>
          </a>
          <a href="https://165.155.0.230/" target="_blank">
            <MenuItem>S2MT6509BGPA-NAM</MenuItem>
          </a>
          <a href="https://165.155.0.231/" target="_blank">
            <MenuItem>S2MT6509BGPB-NAM</MenuItem>
          </a>
          <a href="https://165.155.102.241/" target="_blank">
            <MenuItem>S2MT6509F1-NAM</MenuItem>
          </a>
        </MenuList>
      </Menu>
    );
  } else if (name === "School NAM") {
    return (
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {"Select NAM"}
        </MenuButton>
        <MenuList overflowY={"auto"} maxHeight={"300px"}>
          <a href="https://10.251.33.18/" target="_blank">
            <MenuItem>PW00ISNAM01</MenuItem>
          </a>
          <a href="https://10.251.33.2/" target="_blank">
            <MenuItem>PW00L3NAM01</MenuItem>
          </a>
          <a href="https://10.251.49.10//" target="_blank">
            <MenuItem>PW01AGNAM01</MenuItem>
          </a>
          <a href="https://10.251.49.14/" target="_blank">
            <MenuItem>PW01AGNAM02</MenuItem>
          </a>
          <a href="https://10.251.49.2/" target="_blank">
            <MenuItem>PW01L3NAM01</MenuItem>
          </a>
          <a href="https://10.251.49.6/" target="_blank">
            <MenuItem>PW01L3NAM02</MenuItem>
          </a>
          <a href="https://10.251.65.10/" target="_blank">
            <MenuItem>PW02AGNAM01</MenuItem>
          </a>
          <a href="https://10.251.65.14/" target="_blank">
            <MenuItem>PW02AGNAM02</MenuItem>
          </a>
          <a href="https://10.251.65.18/" target="_blank">
            <MenuItem>PW02ISNAM01</MenuItem>
          </a>
          <a href="https://10.251.65.2/" target="_blank">
            <MenuItem>PW02L3NAM01</MenuItem>
          </a>
          <a href="https://10.251.81.10/" target="_blank">
            <MenuItem>PW03AGNAM01</MenuItem>
          </a>
          <a href="https://10.251.81.14/" target="_blank">
            <MenuItem>PW03AGNAM02</MenuItem>
          </a>
          <a href="https://10.251.81.18/" target="_blank">
            <MenuItem>PW03ISNAM01</MenuItem>
          </a>
          <a href="https://10.251.81.22/" target="_blank">
            <MenuItem>PW03ISNAM02</MenuItem>
          </a>
          <a href="https://10.251.97.2/" target="_blank">
            <MenuItem>PW04L3NAM01</MenuItem>
          </a>
          <a href="https://10.251.97.6/" target="_blank">
            <MenuItem>PW04L3NAM02</MenuItem>
          </a>
          <a href="https://10.251.97.10/" target="_blank">
            <MenuItem>PW04AGNAM01</MenuItem>
          </a>
          <a href="https://10.251.97.14/" target="_blank">
            <MenuItem>PW04AGNAM02</MenuItem>
          </a>
          <a href="https://10.251.113.2/" target="_blank">
            <MenuItem>PW05L3NAM01</MenuItem>
          </a>
          <a href="https://10.251.113.6/" target="_blank">
            <MenuItem>PW05L3NAM02</MenuItem>
          </a>
          <a href="https://10.251.113.10/" target="_blank">
            <MenuItem>PW05AGNAM01</MenuItem>
          </a>
          <a href="https://10.251.129.10/" target="_blank">
            <MenuItem>PW06AGNAM01</MenuItem>
          </a>
          <a href="https://10.251.129.2/" target="_blank">
            <MenuItem>PW06L3NAM01</MenuItem>
          </a>
          <a href="https://10.251.129.6/" target="_blank">
            <MenuItem>PW06L3NAM02</MenuItem>
          </a>
          <a href="https://10.251.20.190/" target="_blank">
            <MenuItem>PW00NMNAM01</MenuItem>
          </a>
          <a href="https://10.251.20.186/" target="_blank">
            <MenuItem>PW00NMNAM02</MenuItem>
          </a>
          <a href="https://10.106.16.33/" target="_blank">
            <MenuItem>OPCTR2-NAM</MenuItem>
          </a>
          <a href="https://10.106.32.33/" target="_blank">
            <MenuItem>OPCTR3-NAM</MenuItem>
          </a>
          <a href="https://10.106.48.33/" target="_blank">
            <MenuItem>OPCTR4-NAM</MenuItem>
          </a>
          <a href="https://10.106.64.33/" target="_blank">
            <MenuItem>OPCTR5-NAM</MenuItem>
          </a>
          <a href="https://10.106.80.33/" target="_blank">
            <MenuItem>OPCTR6-NAM</MenuItem>
          </a>
          <a href="https://10.251.20.254/" target="_blank">
            <MenuItem>SD-CORE-A-NAM</MenuItem>
          </a>
          <a href="https://10.251.16.254/" target="_blank">
            <MenuItem>SD-SVR-B-NAM</MenuItem>
          </a>
        </MenuList>
      </Menu>
    );
  } else if (name === "Sonet NAM") {
    return (
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {"Select NAM"}
        </MenuButton>
        <MenuList overflowY={"auto"} maxHeight={"300px"}>
          <a href="https://10.251.33.100/" target="_blank">
            <MenuItem>SN00L2NAM01</MenuItem>
          </a>
          <a href="https://10.251.33.116/" target="_blank">
            <MenuItem>SN00L2NAM02</MenuItem>
          </a>
          <a href="https://10.251.49.100/" target="_blank">
            <MenuItem>SN01L2NAM01</MenuItem>
          </a>
          <a href="https://10.251.49.116/" target="_blank">
            <MenuItem>SN01L2NAM02</MenuItem>
          </a>
          <a href="https://10.251.65.100/" target="_blank">
            <MenuItem>SN02L2NAM01</MenuItem>
          </a>
          <a href="https://10.251.65.116/" target="_blank">
            <MenuItem>SN02L2NAM02</MenuItem>
          </a>
          <a href="https://10.251.81.100/" target="_blank">
            <MenuItem>SN03L2NAM01</MenuItem>
          </a>
          <a href="https://10.251.81.116/" target="_blank">
            <MenuItem>SN03L2NAM02</MenuItem>
          </a>
          <a href="https://10.251.97.100/" target="_blank">
            <MenuItem>SN04L2NAM01</MenuItem>
          </a>
          <a href="https://10.251.97.116/" target="_blank">
            <MenuItem>SN04L2NAM02</MenuItem>
          </a>
          <a href="https://10.251.113.116/" target="_blank">
            <MenuItem>SN05L2NAM02</MenuItem>
          </a>
          <a href="https://10.251.129.100/" target="_blank">
            <MenuItem>SN06L2NAM01</MenuItem>
          </a>
          <a href="https://10.251.129.116/" target="_blank">
            <MenuItem>SN06L2NAM02</MenuItem>
          </a>
        </MenuList>
      </Menu>
    );
  }
}

const ServiceTools: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-4">
      {dashboardItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center bg-gray-slate shadow-lg rounded-lg p-2"
        >
          <a href={item.link} target="_blank" className="p-6">
            <Image
              src={item.src}
              alt={item.alt}
              width={150}
              height={100}
              sizes={item.sizes}
            />
          </a>
          <p className="text-center">{item.text}</p>
          <div className="py-3">{isNam(item.text)}</div>
        </div>
      ))}
    </div>
  );
};

export default ServiceTools;
