import React, { useState, useEffect } from "react";
import Image from "next/image";
import path from "path";
const DashboardItems: React.FC = () => {
  const [dashboardItems, setDashboardItems] = useState<
    {
      src: string;
      alt: string;
      sizes: string;
      text: string;
      link: string;
    }[]
  >([]);

  useEffect(() => {
    const csvFilePath = "/csv/dashBoardItems.csv"; // Also Jimmy move the csv folder out of public.
    fetch(csvFilePath)
      .then((response) => response.text())
      .then((csvText) => {
        const lines = csvText.split("\n");
        const items = lines.slice(1).map((line) => {
          const values = line.split(",");
          return {
            src: values[0],
            alt: values[1],
            sizes: values[2],
            text: values[3],
            link: values[4],
          };
        });
        setDashboardItems(items);
      })
      .catch((error) => {
        console.error("Error fetching or parsing CSV:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-4 p-8 overflow-y-scroll h-[calc(100vh-28rem)]">
      {dashboardItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center bg-gray-slate shadow-lg rounded-lg p-2 cursor-pointer"
        >
          <a href={item.link} target="_blank" className="p-6">
            <Image
              src={item.src}
              alt={item.alt}
              width={150}
              height={100}
              sizes={item.sizes}
            />
          </a>
          <p className="text-center p-2">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardItems;
