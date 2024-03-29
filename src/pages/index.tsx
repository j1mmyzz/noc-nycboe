import { NextPage } from "next";
import Layout from "./components/ui/layout";
import Image from "next/image";

//Note: Whoever edits these files, all images are found in the public folder. Also I removed the reports and notifications page because they didn't work om the original website.

//Only thing this page does it display the NOC mission statemnt and points as an image.
const Home: NextPage = () => {
  return (
    <Layout title="Home">
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
    </Layout>
  );
};

export default Home;
