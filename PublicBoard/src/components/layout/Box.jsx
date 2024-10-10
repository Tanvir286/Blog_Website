import React from "react";

const Box = ({ key, className, children }) => {
  return (
    <div key={key} className={className}>
      {children}
    </div>
  );
};

export default Box;
