import React from "react";

const Commodity = ({ comm }) => {
  return (
    <div className="commodity">
      <img src={comm.src} alt={comm.text} />
      <p>{comm.text}</p>
      <div className="price">
        <h3>${comm.price}</h3>
        <h6>NT${comm.price}</h6>
      </div>
      <button>
        <div className="cart"></div>加入購物車
      </button>
    </div>
  );
};

export default Commodity;
