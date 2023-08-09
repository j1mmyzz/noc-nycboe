import React, { useState, useEffect } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
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
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Select NAM
      </MenuButton>
      <MenuList className="hover:bg-gray-200">
        {nam.map((item, index) => (
          <a
            href={item.link}
            target="_blank"
            className="text-center"
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
