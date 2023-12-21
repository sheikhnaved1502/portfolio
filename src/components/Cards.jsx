import React from "react";
import img from "../images/cycleZomatop.png";
function Cards() {
  return (
    <>
      <div className="text-center cycle">
        <img
          src={img}
          alt=""
          style={{ height: "600px", width: "567", cursor: "pointer" }}
        />
      </div>
    </>
  );
}

export default Cards;
