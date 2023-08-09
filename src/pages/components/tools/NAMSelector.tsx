import React, { useState, useEffect } from "react";
// import CSVReader from "../csvParser/CSVReader";

const NAMSelector: React.FC = () => {
  const [nam, setNAM] = useState<
    {
      name: string;
      link: string;
    }[]
  >([]);

  useEffect(() => {
    const csvFilePath = "/csv/centralNAMLinks.csv"; // For the tools, update the path to the csv file for different tools. Also Jimmy move the csv folder out of public then make sure to change the paths int he other fileso otherwise the whole thing will break :D

    fetch(csvFilePath)
      .then((response) => response.text())
      .then((csvText) => {
        const lines = csvText.split("\n");
        const items = lines.slice(1).map((line) => {
          const values = line.split(",");
          return {
            name: values[0],
            link: values[1],
          };
        });
        setNAM(items);
      })
      .catch((error) => {
        console.error("Error fetching or parsing CSV:", error);
      });
  }, []);

  return (
    <div>
      {nam.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center bg-gray-slate shadow-lg rounded-lg p-2"
        >
          <a href={item.link} target="_blank" className="p-6">
            <div>
              name={item.name}
              link={item.link}
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default NAMSelector;
