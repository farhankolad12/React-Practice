import React from "react";

const Button = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Get Image</button>
    </div>
  );
};

export default Button;
