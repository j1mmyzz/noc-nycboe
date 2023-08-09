import React, { useState } from "react";
import CSVSelector from "./CSVSelector";

type Props = {
  filePath: string;
};

const CSVReader = ({ filePath }: Props) => {
  const [data, setData] = useState<string[][]>([]);

  const headers = data.length > 0 ? data[0] : [];
  const rows = data.slice(1);

  const arraysByHeader: { [header: string]: string[] } = {};

  // Initialize arraysByHeader with empty arrays for each header
  headers.forEach((header) => {
    arraysByHeader[header] = [];
  });

  // Populate arraysByHeader with values based on rows
  rows.forEach((rowData) => {
    headers.forEach((header, index) => {
      arraysByHeader[header].push(rowData[index]);
    });
  });

  const headerOrder = Object.keys(arraysByHeader); // The order of headers

  return (
    <div>
      <CSVSelector filePath={filePath} onChange={(_data) => setData(_data)} />
      <table>
        <thead>
          <tr>
            {headerOrder.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((rowData, i) => (
            <tr key={i}>
              {headerOrder.map((header, j) => (
                <td key={j}>{arraysByHeader[header][i]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CSVReader;
