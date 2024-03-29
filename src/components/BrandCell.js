import React from "react";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const BrandCell = ({ brand }) => {
  // Check if the brand has an image URL
  const hasImage = brand.imageURL && brand.imageURL.trim() !== "";

  // Check if the brand has messages
  const hasMessages = brand.messages && brand.messages.length > 0;

  return (
    <td className="border px-4 py-2 text-center">
      {hasImage ? (
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={brand.imageURL} alt={brand.name} className="h-8 w-8 mr-2" />
            <span>{brand.name}</span>
          </div>
          {hasMessages && (
            <div className="flex items-center ml-2">
                 <HiOutlineChatBubbleLeftRight className="text-gray-400 mr-1" />
              <span className="text-gray-400 text-xs">{brand.messages.length}</span>
             
            </div>
          )}
        </div>
      ) : (
        <span>{brand.name}</span>
      )}
    </td>
  );
};

export default BrandCell;
