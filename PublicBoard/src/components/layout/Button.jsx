import React from "react";

const Button = ({ key, onClick, className, children }) => {
  return (
    <button key={key} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
