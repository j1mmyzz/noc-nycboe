import Image from "next/image";
import Layout from "./components/layout";
import { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <>
      <Layout title="Contact">
        <Image
          className=""
          src="/banners/contact-banner.png"
          alt="nyc logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
        />
        <div>contact</div>
      </Layout>
    </>
  );
};

export default Contact;
