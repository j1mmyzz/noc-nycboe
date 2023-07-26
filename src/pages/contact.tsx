import Image from "next/image";
import Layout from "./components/layout";
import { NextPage } from "next";
import NocContactList from "./components/contacts/NocContactList";
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
        {/* FIX THE HEIGHT */}
        <div className="flex flex-row">
          {/* Left side bullets*/}
          <div className="bg-slate-200 w-1/5 p-8 font-semibold h-screen">
            <ul>
              <li>52 Chambers Technical Staff</li>
              <li>Blackberry PIN Listing</li>
              <li>Emergency Contact List</li>
              <li>NOC Contact List</li>
              <li>NOC Field Operations Staff Contact List</li>
              <li>NOC Dashboard Contact List</li>
              <li>UPS Maintenance Contact List</li>
              <li>Vendor Support Contact List</li>
            </ul>
          </div>

          {/* Actial contacts */}
          <div className="flex flex-col justify-center items-center">
            <div className="p-10">
              <NocContactList />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
