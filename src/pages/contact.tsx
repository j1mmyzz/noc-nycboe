import { useState } from "react";
import Image from "next/image";
import Layout from "./components/layout";
import { NextPage } from "next";
import NocContactList from "./components/contacts/NocContactList";
import BlackberryPINListing from "./components/contacts/BlackberryPINListing";
import ChambersTechnicalStaff from "./components/contacts/ChambersTechnicalStaff";
import EmergencyContactList from "./components/contacts/EmergencyContactList";
import NocDashboardContactList from "./components/contacts/NocDashboardContactList";
import NocFieldOperationsStaff from "./components/contacts/NocFieldOperationsStaff";
import UPSMaintenenceContactList from "./components/contacts/UPSMaintenenceContactLIst";
import VendorSupplyContactList from "./components/contacts/VendorSupportContactList";

const Contact: NextPage = () => {
  const [selectedContact, setSelectedContact] = useState("NocContactList");

  const handleContactChange = (contact: string) => {
    setSelectedContact(contact);
  };

  const ContactComponent = () => {
    switch (selectedContact) {
      case "BlackberryPINListing":
        return <BlackberryPINListing />;
      case "ChambersTechnicalStaff":
        return <ChambersTechnicalStaff />;
      case "EmergencyContactList":
        return <EmergencyContactList />;
      case "NocDashboardContactList":
        return <NocDashboardContactList />;
      case "NocFieldOperationsStaff":
        return <NocFieldOperationsStaff />;
      case "UPSMaintenenceContactList":
        return <UPSMaintenenceContactList />;
      case "VendorSupplyContactList":
        return <VendorSupplyContactList />;
      default:
        return <NocContactList />;
    }
  };

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
        <div className="flex h-screen">
          {/* Use h-screen to take full viewport height */}
          {/* Left side bullets*/}
          <div className="bg-slate-200 w-[25%] p-8 font-semibold flex flex-col h-full">
            {/* Use h-full to take full height of the parent */}
            <ul className="flex-grow">
              {/* Use flex-grow to take the remaining height */}
              <li
                className="hover:underline cursor-pointer"
                onClick={() => handleContactChange("ChambersTechnicalStaff")}
              >
                52 Chambers Technical Staff
              </li>
              <li
                className="hover:underline cursor-pointer"
                onClick={() => handleContactChange("BlackberryPINListing")}
              >
                Blackberry PIN Listing
              </li>
              <li
                className="hover:underline cursor-pointer"
                onClick={() => handleContactChange("EmergencyContactList")}
              >
                Emergency Contact List
              </li>
              <li
                className="hover:underline cursor-pointer"
                onClick={() => handleContactChange("NocContactList")}
              >
                NOC Contact List
              </li>
              <li
                className="hover:underline cursor-pointer"
                onClick={() => handleContactChange("NocFieldOperationsStaff")}
              >
                NOC Field Operations Staff Contact List
              </li>
              <li
                className="hover:underline cursor-pointer"
                onClick={() => handleContactChange("NocDashboardContactList")}
              >
                NOC Dashboard Contact List
              </li>
              <li
                className="hover:underline cursor-pointer"
                onClick={() => handleContactChange("UPSMaintenenceContactList")}
              >
                UPS Maintenance Contact List
              </li>
              <li
                className="hover:underline cursor-pointer"
                onClick={() => handleContactChange("VendorSupplyContactList")}
              >
                Vendor Support Contact List
              </li>
            </ul>
          </div>
          {/* Actual contacts */}
          <div className="flex flex-col justify-center items-center w-full">
            <div className="p-10">
              <ContactComponent />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
