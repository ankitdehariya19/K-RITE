import React from "react";

const NextMeetingCell = ({ nextMeeting }) => {
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
      <div className="flex flex-wrap gap-2">
        <span
          className="inline-block px-3 py-1 rounded-md text-sm font-semibold"
          style={{
            backgroundColor: getRandomColor(),
            color: "rgba(0, 0, 0, 0.8)", // Text color
          }}
        >
          {nextMeeting}
        </span>
      </div>
    </td>
  );
};

export default NextMeetingCell;
