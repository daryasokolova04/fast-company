import React from "react";

const Quality = ({ quality }) => {
  const setClassName = (item) => {
    return "badge m-1 bg-" + item.color;
  };

  return (
    <span className={setClassName(quality)} key={quality._id}>
      {quality.name}
    </span>
  );
};

export default Quality;
