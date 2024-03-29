import React from "react";
import Button from "./Button";

const AddMeetingCell = () => {
  return (
    <td className="border  px-4 py-2">
      <Button text="Add" onClick={() => console.log("Add button clicked")} />
    </td>
  );
};

export default AddMeetingCell;
