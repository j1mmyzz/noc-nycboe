import { NextPage } from "next";
import Layout from "./components/ui/layout";
import Image from "next/image";
import CSVConverter from "./components/csvParser/CSVReader";
import CSVReader from "./components/csvParser/CSVReader";
const DashBoardItems = () => {
  const csvFilePath = "/csv/serviceTools.csv";
  return <CSVReader filePath={csvFilePath} />;
};

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Image
        className=""
        src="/headerFinal.png"
        alt="nyc logo"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%" }}
      />

      <div className="flex justify-center">
        <Image
          src="/background (1).gif"
          alt="nyc logo"
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          style={{ height: "100%", width: "65%" }}
        />
      </div>
      <DashBoardItems />
    </Layout>
  );
};

export default Home;
