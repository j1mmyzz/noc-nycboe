import Image from "next/image";
import Layout from "./components/ui/layout";
import { NextPage } from "next";
import NocContactList from "./components/contacts/NocContactList";
import BlackberryPINListing from "./components/contacts/BlackberryPINListing";
import ChambersTechnicalStaff from "./components/contacts/ChambersTechnicalStaff";
import EmergencyContactList from "./components/contacts/EmergencyContactList";
import NocDashboardContactList from "./components/contacts/NocDashboardContactList";
import UPSMaintenenceContactList from "./components/contacts/UPSMaintenenceContactLIst";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
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
      default:
        return <NocContactList />;
    }
  };

  return (
    <Layout title="Contact">
      <Image
        src="/headerFinal.png"
        alt="nyc logo"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "18%" }}
      />

      <div className="flex h-full">
        {/* Left side bullets*/}
        <div className="w-[35%] p-12 font-semibold flex flex-col">
          <ul className="text-xl">
            <li
              className="hover:underline cursor-pointer ml-4 mb-4"
              onClick={() => handleContactChange("ChambersTechnicalStaff")}
            >
              52 Chambers Technical Staff
            </li>
            <li
              className="hover:underline cursor-pointer ml-4 mb-4"
              onClick={() => handleContactChange("BlackberryPINListing")}
            >
              Blackberry PIN Listing
            </li>
            <li
              className="hover:underline cursor-pointer ml-4 mb-4"
              onClick={() => handleContactChange("EmergencyContactList")}
            >
              Emergency Contact List
            </li>
            <li
              className="hover:underline cursor-pointer ml-4 mb-4"
              onClick={() => handleContactChange("NocContactList")}
            >
              NOC Contact List
            </li>
            <a href="http://noc.nycboe.net/contact/Field%20Operation%20Staff%20Contact%20List%20revised%208-26-2013.xls">
              <li className="hover:underline cursor-pointer ml-4 mb-4">
                NOC Field Operations Staff Contact List
              </li>
            </a>
            <li
              className="hover:underline cursor-pointer ml-4 mb-4"
              onClick={() => handleContactChange("NocDashboardContactList")}
            >
              NOC Dashboard Contact List
            </li>
            <li
              className="hover:underline cursor-pointer ml-4 mb-2"
              onClick={() => handleContactChange("UPSMaintenenceContactList")}
            >
              UPS Maintenance Contact List
            </li>
            <li className="hover:cursor-pointer">
              <Accordion defaultIndex={[0]} allowMultiple allowToggle>
                <AccordionItem border={"none"}>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" className="text-xl">
                      Vendor Support Contact List
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={0.5} className="hover:bg-slate-100">
                    <a href="http://noc.nycboe.net/contact/FISA_DOE_Support_Guide_2-13-2012_Ver%207%20.doc">
                      FISA/DOE FMS3 Support Model
                    </a>
                  </AccordionPanel>
                  <AccordionPanel pb={0.5} className="hover:bg-slate-100">
                    <a
                      href="http://noc.nycboe.net/contact/Sidera-Lightower%20Fiber%20Networks%20Customer%20Support%20Information.pdf"
                      target="_blank"
                    >
                      Sidera-Lightower Fiber Networks Customer Support
                      Information
                    </a>
                  </AccordionPanel>
                  <AccordionPanel pb={0.5} className="hover:bg-slate-100">
                    <a
                      href="http://noc.nycboe.net/contact/Lightower_Trouble_Reporting_and_Escalation_Process.pdf"
                      target="_blank"
                    >
                      Lightower Trouble Reporting and Escalation Process
                    </a>
                  </AccordionPanel>
                  <AccordionPanel pb={0.5} className="hover:bg-slate-100">
                    TW Telecom //Nothing here
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </li>
          </ul>
        </div>
        {/* Actual contacts from src/pages/components/contacts */}
        <div className="w-full">
          <div className="p-10">
            <ContactComponent />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
