import { useState } from "react";
import Image from "next/image";
import Layout from "./components/layout";
import { NextPage } from "next";
import NocContactList from "./components/contacts/NocContactList";
import BlackberryPINListing from "./components/contacts/BlackberryPINListing";
import ChambersTechnicalStaff from "./components/contacts/ChambersTechnicalStaff";
import EmergencyContactList from "./components/contacts/EmergencyContactList";
import NocDashboardContactList from "./components/contacts/NocDashboardContactList";
import UPSMaintenenceContactList from "./components/contacts/UPSMaintenenceContactLIst";
import VendorSupplyContactList from "./components/contacts/VendorSupportContactList";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
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
        {/* FIX THE HEIGHT */}
        <Image
          className=""
          src="/banners/contact-banner.png"
          alt="nyc logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "18%" }}
        />
        <div className="flex min-h-screen">
          {/* Left side bullets*/}
          <div className="bg-slate-200 w-[25%] p-8 font-semibold flex flex-col h-full">
            <ul className="flex-grow">
              {/* Use flex-grow to take the remaining height */}
              <li
                className="hover:underline cursor-pointer ml-4 mb-2"
                onClick={() => handleContactChange("ChambersTechnicalStaff")}
              >
                52 Chambers Technical Staff
              </li>
              <li
                className="hover:underline cursor-pointer ml-4 mb-2"
                onClick={() => handleContactChange("BlackberryPINListing")}
              >
                Blackberry PIN Listing
              </li>
              <li
                className="hover:underline cursor-pointer ml-4 mb-2"
                onClick={() => handleContactChange("EmergencyContactList")}
              >
                Emergency Contact List
              </li>
              <li
                className="hover:underline cursor-pointer ml-4 mb-2"
                onClick={() => handleContactChange("NocContactList")}
              >
                NOC Contact List
              </li>
              <a href="http://noc.nycboe.net/contact/Field%20Operation%20Staff%20Contact%20List%20revised%208-26-2013.xls">
                <li className="hover:underline cursor-pointer ml-4 mb-2">
                  NOC Field Operations Staff Contact List
                </li>
              </a>

              <li
                className="hover:underline cursor-pointer ml-4 mb-2"
                onClick={() => handleContactChange("NocDashboardContactList")}
              >
                NOC Dashboard Contact List
              </li>
              <li
                className="hover:underline cursor-pointer ml-4"
                onClick={() => handleContactChange("UPSMaintenenceContactList")}
              >
                UPS Maintenance Contact List
              </li>
              <li
                className="hover:cursor-pointer"
                // onClick={() => handleContactChange("VendorSupplyContactList")}
              >
                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Vendor Support Contact List
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={0.5} className="hover:bg-slate-100">
                      FISA/DOE FMS3 Support Model
                    </AccordionPanel>
                    <AccordionPanel pb={0.5} className="hover:bg-slate-100">
                      Sidera-Lightower Fiber Networks Customer Support
                      Information
                    </AccordionPanel>
                    <AccordionPanel pb={0.5} className="hover:bg-slate-100">
                      Lightower Trouble Reporting and Escalation Process
                    </AccordionPanel>
                    <AccordionPanel pb={0.5} className="hover:bg-slate-100">
                      TW Telecom
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </li>
            </ul>
          </div>
          {/* Actual contacts */}
          <div className="flex justify-center items-center w-full overflow-auto">
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
