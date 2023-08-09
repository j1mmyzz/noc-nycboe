//Should Remove this page

import Image from "next/image";
import Layout from "./components/ui/layout";
import { NextPage } from "next";

const Reports: NextPage = () => {
  return (
    <Layout title="Reports">
      <Image
        className=""
        src="/headerFinal.png"
        alt="nyc logo"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%" }}
      />
      <div>reports</div>
    </Layout>
  );
};

export default Reports;
