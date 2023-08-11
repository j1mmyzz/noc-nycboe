import React, { useState, useEffect } from "react";
import { Menu, MenuButton, MenuList, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface NAMSelectorProps {
  csvFilePath: string;
}

const NAMSelector: React.FC<NAMSelectorProps> = ({ csvFilePath }) => {
  const [nam, setNAM] = useState<
    {
      name: string;
      link: string;
    }[]
  >([]);

  useEffect(() => {
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
  }, [csvFilePath]);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Select NAM
      </MenuButton>
      <MenuList className="max-h-72 overflow-auto ">
        {nam.map((item, index) => (
          <a
            href={item.link}
            target="_blank"
            className="block text-center py-2 hover:bg-gray-200"
            key={index}
          >
            {item.name}
          </a>
        ))}
      </MenuList>
    </Menu>
  );
};

export default NAMSelector;
