import React, { useState } from "react";

const MembersCell = ({ members }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const getBackgroundColor = (name) => {
    const colors = [
      "#FFCCCC",
      "#FFCC99",
      "#FFFF99",
      "#99FF99",
      "#99FFFF",
      "#9999FF",
      "#FF99FF",
      "#FF9999",
    ];
    const firstLetter = name.charAt(0).toUpperCase();
    const charCode = firstLetter.charCodeAt(0);
    const colorIndex = charCode % colors.length;
    return colors[colorIndex];
  };

  return (
    <td className="border px-4 py-2">
      <div className="flex items-center justify-center space-x-2">
        {members.slice(0, 6).map((member, index) => (
          <div
            key={index}
            className="relative w-8 h-8 overflow-hidden rounded-full border-2 border-gray-200"
            style={{
              backgroundColor: getBackgroundColor(member.name),
              marginLeft: index * -4 + "px",
              zIndex: members.length - index * 0, 
            }}
          >
            {member.image && (
              <img
                src={member.image}
                alt={member.name} 
                className="w-full h-full object-cover"
                onLoad={handleImageLoad}
                onError={(e) => {
                  e.target.style.display = "none"; 
                }}
              />
            )}
            {!member.image && !imageLoaded && (
              <span className="flex items-center justify-center w-full h-full text-white font-semibold">
                {member.name.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
        ))}
        {members.length > 6 && (
          <div
            key="placeholder"
            className="relative w-8 h-8 overflow-hidden rounded-full border-2 border-gray-200"
            style={{ backgroundColor: "#999999", marginLeft: "-40px", zIndex: 1 }} 
          >
            <span className="flex items-center justify-center w-full h-full text-white font-semibold">
              +{members.length - 6}
            </span>
          </div>
        )}
      </div>
    </td>
  );
};

export default MembersCell;
