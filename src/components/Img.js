import React from "react";

const Img = ({ url, color }) => {
  return (
    <div style={{ backgroundColor: color }}>
      <img src={url} alt="random" style={{ width: "50%" }} />
    </div>
  );
};

export default Img;
