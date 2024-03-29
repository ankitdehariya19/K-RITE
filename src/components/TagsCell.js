import React from "react";

const TagsCell = ({ tags }) => {
  return (
    <td className="border  px-4 py-2">
      {tags.map((tag, index) => (
        <span key={index} className="inline-block px-2 py-1 rounded-md bg-gray-200 text-gray-600 text-sm font-medium mr-2 mb-2">
          #{tag}
        </span>
      ))}
    </td>
  );
};

export default TagsCell;
