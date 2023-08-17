import { useState } from "react";
import Layout from "./components/ui/layout";
import { NextPage } from "next";

//I made this page like the original website (noc.nycboe.net). On the original, I'm pretty sure it's just iframes with a subnet but if the domain changes then I'm pretty sure this page will break.

//I used a list here instead of a csv incase it does break.

//If you need to convert these to a csv file https://www.convertsimple.com/convert-javascript-array-to-csv/ is a good site.

const documentLinks = [
  "http://noc.nycboe.net/focus_points.html",
  "http://noc.nycboe.net/access_mainframe_schedule.html",
  "http://noc.nycboe.net/doc/DIIT_doc.html",
  "http://noc.nycboe.net/doc/doc_diagram.html",
  "http://noc.nycboe.net/process_procedure.php",
  "http://noc.nycboe.net/noc_bulletin.php",
  "http://noc.nycboe.net/doc/NYC%20DOE%20Project%20Overview-7-27-05.ppt",
  "http://noc.nycboe.net/doc/DOE378%20Special%20Education%20Student%20Information%20System%20(SESIS)%20Support%2009.16.10.pdf",
  "http://noc.nycboe.net/doc/doc_training.html",
  "http://noc.nycboe.net/doc/Zayo_doc.html",
  "http://noc.nycboe.net/doc/Zscaler_doc.html",
];

const documentNames = [
  "5 Focus Points",
  "Access to Mainframe Schedule",
  "DIIT Documents",
  "Network Diagrams",
  "NOC Process and Procedures",
  "NOC Technical Bulletins",
  "Project Documents",
  "SESIS Documents",
  "Training Documents",
  "Zayo Support Documents",
  "Zscaler Support Documents",
];

const Documents: NextPage = () => {
  const [selectedLinkIndex, setSelectedLinkIndex] = useState(0);

  const handleLinkClick = (index: number) => {
    setSelectedLinkIndex(index);
  };

  return (
    <Layout title="Documents">
      <div className="flex">
        <div className="w-1/5 h-screen bg-slate-200 flex-col p-6 font-bold gap-2">
          {documentNames.map((name, index) => (
            //Basically when the option is clicked on the left it'll render the subnet in an iframe.
            <button key={index} onClick={() => handleLinkClick(index)}>
              {name}
            </button>
          ))}
        </div>
        <div className="flex-grow flex items-center justify-center">
          <iframe
            src={documentLinks[selectedLinkIndex]}
            height="100%"
            width="100%"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Documents;
