import React from "react";
import BrandCell from "./BrandCell";
import DescriptionCell from "./DescriptionCell";
import MembersCell from "./MembersCell";
import CategoriesCell from "./CategoriesCell";
import TagsCell from "./TagsCell";
import NextMeetingCell from "./NextMeetingCell";

const TableRow = ({ brand, selected, onSelect }) => {
  const handleCheckboxChange = () => {
    onSelect(brand.id);
  };

  return (
    <tr>
      <td className="px-4 py-2 text-center border ">
        <input
          type="checkbox"
          checked={selected}
          onChange={handleCheckboxChange}
          className="rounded border-gray-300 focus:ring-blue-500"
        />
      </td>
      <BrandCell brand={brand.brand} />
      <DescriptionCell description={brand.description} />
      <MembersCell members={brand.members} />
      <CategoriesCell categories={brand.categories} />
      <TagsCell tags={brand.tags} />
      <NextMeetingCell nextMeeting={brand.nextMeeting} />
    </tr>
  );
};

export default TableRow;
