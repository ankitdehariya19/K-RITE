import React from "react";

const CategoriesCell = ({ categories }) => {
  const getRandomColor = () => {
    const colors = [
      "rgba(255, 204, 204, 0.2)",
      "rgba(255, 204, 153, 0.2)",
      "rgba(255, 255, 153, 0.2)",
      "rgba(153, 255, 153, 0.2)",
      "rgba(153, 255, 255, 0.2)",
      "rgba(153, 153, 255, 0.2)",
      "rgba(255, 153, 255, 0.2)",
      "rgba(255, 153, 153, 0.2)",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <td className="border  px-4 py-2">
      {categories.map((category, index) => (
        <span
          key={index}
          className="inline-block px-2 py-1 rounded-md mr-2 mb-2"
          style={{ backgroundColor: getRandomColor() }}
        >
          {category}
        </span>
      ))}
    </td>
  );
};

export default CategoriesCell;
