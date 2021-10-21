import React from "react";
import up from "../img/aboutRenChen/upChevron.svg";

const TopBtn = () => {
  const top = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };
  return (
    <button onClick={top} className="top">
      <img src={up} alt={up} />
    </button>
  );
};

export default TopBtn;
