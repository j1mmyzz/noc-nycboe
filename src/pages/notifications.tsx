//Should Remove this page

import Image from "next/image";
import Layout from "./components/ui/layout";
import { NextPage } from "next";

const Notifications: NextPage = () => {
  return (
    <Layout title="Notifications">
      <Image
        className=""
        src="/headerFinal.png"
        alt="nyc logo"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%" }}
      />
      <div>notifs</div>
    </Layout>
  );
};

export default Notifications;
