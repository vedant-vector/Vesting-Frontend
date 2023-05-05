import React from "react";
import noimg from "../images/noimg.png";

const Novalue = () => {
  return (
    <div>
      <img src={noimg} className="h-32 m-auto" alt="" />
      <p className=" text-red-500">No Vesting Found!!</p>
    </div>
  );
};

export default Novalue;
