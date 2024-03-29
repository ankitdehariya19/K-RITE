import React, { useState } from "react";
import TableHeader from "../../components/TableHeader";
import TableRow from "../../components/TableRow";
import Button from "../../components/Button";
import Input from "../../components/InputSearch";
import { IoSettingsOutline } from "react-icons/io5";
import ButtonGroup from "../../components/ButtonGroup";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import TableRowAdd from "../../components/TableRowAdd"; 

const ProductsTable = ({ brands }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedFunction, setSelectedFunction] = useState("");
  const [data, setData] = useState(brands); 

  const headers = [
    "Brand",
    "Description",
    "Members",
    "Categories",
    "Tags",
    "Next Meeting",
    "+",
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRowSelect = (id) => {
    const selectedIndex = selectedRows.indexOf(id);
    let newSelectedRows = [];

    if (selectedIndex === -1) {
      newSelectedRows = [...selectedRows, id];
    } else {
      newSelectedRows = selectedRows.filter((rowId) => rowId !== id);
    }

    setSelectedRows(newSelectedRows);
  };

  const handleSelectAllRows = (selectAll) => {
    const newSelectedRows = selectAll ? brands.map((brand) => brand.id) : [];
    setSelectedRows(newSelectedRows);
  };

  const handleButtonClick = (buttonName) => {
    setSelectedFunction(buttonName);
    switch (buttonName) {
      case "Delete":
        console.log("Delete button clicked for rows:", selectedRows);
        setSelectedRows([]);
        break;
      case "Archive":
        console.log("Archive button clicked for rows:", selectedRows);
        setSelectedRows([]);
        break;
      default:
        break;
    }
  };

  const handleAddBrand = (newBrand) => {
    setData([...data, newBrand]);
  };

  const filteredBrands = data.filter((brand) =>
    brand.brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-3">
      <div className="flex items-center justify-between py-3 px-5 border border-b-0 rounded-t-xl">
        <h1 className="text-2xl font-medium">Products</h1>
        <div className="flex space-x-4 items-center">
          <Input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button
            icon={<HiOutlineChatBubbleLeftRight />}
            className="flex items-center justify-center"
            onClick={() => console.log("Message button clicked")}
          />
          <Button
            icon={<IoSettingsOutline />}
            onClick={() => console.log("Settings button clicked")}
          />
        </div>
      </div>
      <ButtonGroup onClick={handleButtonClick} />
      <table className="w-full border-collapse border">
        <TableHeader headers={headers} onSelectAllRows={handleSelectAllRows} />
        <tbody>
          {filteredBrands.map((brand) => (
            <TableRow
              key={brand.id}
              brand={brand}
              selected={selectedRows.includes(brand.id)}
              onSelect={handleRowSelect}
            />
          ))}
          <TableRowAdd onAddBrand={handleAddBrand} />
        </tbody>
      </table>
      <div className="fixed bottom-0 left-0 right-0  py-4 px-8 flex justify-between items-center w-full">
        <div className="flex w-full items-center justify-center gap-x-5">
          <Button text="Delete" onClick={() => handleButtonClick("Delete")} />
          <Button text="Archive" onClick={() => handleButtonClick("Archive")} />
          <Button text="More" />
          {selectedRows.length > 0 && (
            <span>{`${selectedRows.length} row(s) selected`}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsTable;
