import React, { useState } from "react";
import CSVSelector from "./CSVSelector";

type Props = {
  filePath: string;
};

const CSVReader = ({ filePath }: Props) => {
  const [data, setData] = useState<string[][]>([]);
  const headers = data[0];
  const rows = data.slice(1);

  return (
    <div>
      <CSVSelector filePath={filePath} onChange={(_data) => setData(_data)} />
      <table>
        <thead>
          <tr>
            {headers?.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map((rowData, i) => (
            <tr key={i}>
              {rowData?.map((data, j) => (
                <td key={j}>{data}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CSVReader;
