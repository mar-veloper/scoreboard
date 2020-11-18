import React from "react";

const TableHead = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map(({ label }, index) => (
          <th scope="col" key={`${label}-${index}`}>
            {label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
