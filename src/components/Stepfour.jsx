import React from "react";
import Cliff from "./Cliff";
import EndVesting from "./EndVesting";
import StartVesting from "./StartVesting";

const Stepfour = () => {
  return (
    <div className=" bg-white  shadow-for-bg shadow-md mb-5 mx-48 rounded-b-2xl text-left pb-4">
      <StartVesting />
      <EndVesting />
      <Cliff />
    </div>
  );
};

export default Stepfour;
