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
        <div className="flex h-full ">
          {/* Left side bullets*/}
          <div className="bg-slate-200 w-[25%] p-8 font-semibold">
            <ul>
              <li className="hover:underline">52 Chambers Technical Staff</li>
              <li className="hover:underline">Blackberry PIN Listing</li>
              <li className="hover:underline">Emergency Contact List</li>
              <li className="hover:underline">NOC Contact List</li>
              <li className="hover:underline">
                NOC Field Operations Staff Contact List
              </li>
              <li className="hover:underline">NOC Dashboard Contact List</li>
              <li className="hover:underline">UPS Maintenance Contact List</li>
              <li className="hover:underline">Vendor Support Contact List</li>
            </ul>
          </div>

          {/* Actial contacts */}
          <div className="flex flex-col justify-center items-center w-full">
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
