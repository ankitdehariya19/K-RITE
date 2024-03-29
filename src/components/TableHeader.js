import React from "react";

const TableHeader = ({ headers, onSelectAllRows }) => {
  const handleCheckboxChange = (e) => {
    onSelectAllRows(e.target.checked);
  };

  return (
    <thead className="">
      <tr>
        <th className="border px-4 py-2">
          <input type="checkbox" onChange={handleCheckboxChange} />
        </th>
        {headers.map((header, index) => (
          <th key={index} className="border  px-4 py-2 text-gray-500 font-medium text-start">
            {header}
          </th>
        ))}
      </tr>
      
    </thead>
  );
};

export default TableHeader;
