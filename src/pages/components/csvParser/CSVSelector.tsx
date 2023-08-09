// components/CSVSelector.tsx
import React from "react";
import Papa from "papaparse";
type Props = {
  filePath: string;
  onChange(data: string[][]): void;
};

const CSVSelector = ({ filePath, onChange }: Props) => {
  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(filePath);
        const csvText = await response.text();

        Papa.parse<string[]>(csvText, {
          worker: true,
          complete({ data }) {
            onChange(data);
          },
        });
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [filePath, onChange]);

  return null;
};

export default CSVSelector;
