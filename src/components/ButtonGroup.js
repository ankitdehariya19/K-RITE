
import React from "react";
import Button from "./Button";
import { RxDashboard } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaArrowDownShortWide } from "react-icons/fa6";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { FiPlusSquare } from "react-icons/fi";
import { BiExport, BiImport } from "react-icons/bi";

const ButtonGroup = ({ onClick }) => {
  const handleButtonClick = (buttonName) => {
    onClick(buttonName);
  };

  return (
    <div className="flex justify-between items-center border-b-0 border py-3  px-5">
    <div className="flex space-x-2">
      <Button
       icon={<RxDashboard  />}
       secondaryIcon={<IoMdArrowDropdown  />}
        text="All Brands"
        onClick={() => console.log("All Brands button clicked")}
      />
      <Button
        text="Desk"
        secondaryIcon={<IoMdArrowDropdown  />}
        onClick={() => console.log("Desk button clicked")}
      />
      <Button
        text="Tags"
        secondaryIcon={<IoMdArrowDropdown  />}
        onClick={() => console.log("Desk button clicked")}
      />
      <Button
        text="Sort"
        icon={<FaArrowDownShortWide   />}
        className='bg-gray-100 hover:bg-slate-50 hover:text-black  border border-dashed border-gray-400 shadow-none '
        onClick={() => console.log("Desk button clicked")}
      />
      <Button
        text="Filter"
        className='bg-gray-100 hover:bg-slate-50 hover:text-black border border-dashed border-gray-400 shadow-none '
        icon={<HiOutlineAdjustmentsHorizontal    />}
        onClick={() => console.log("Desk button clicked")}
      />
    </div>
    <div className="flex space-x-2">
      <Button
        text="Meeting"
        icon={<FiPlusSquare     />}
        onClick={() => console.log("Meeting button clicked")}
      />
      <Button
        text="Import"
        icon={<BiImport      />}
        onClick={() => console.log("Import button clicked")}
      />
      <Button
        text="Export"
        icon={<BiExport     />}
        onClick={() => console.log("Export button clicked")}
      />
    </div>
  </div>
  );
};

export default ButtonGroup;
