import React from "react";
import bgImage from "../images/claimIMG.png";

const Claim = () => {
  return (
    <div className=" bg-for-bg pb-8 ">
      <div className="inline">
        <p className="py-24 text-5xl text-white inline-block">
          Claim Your Tokens
        </p>
      </div>
      <img src={bgImage} alt="robo-image" className="inline-block h-36" />
      <div className=" w-auto mx-48 bg-for-bg h-12 mt-8 rounded-t-2xl border-2 border-b-0 border-black border-b-for-bg flex text-xl font-bold text-white justify-evenly py-2">
        <p>Token</p>
        <p>Claimed</p>
        <p>Total</p>
        <p>Start</p>
        <p>End</p>
        <p>Claimable</p>
        <p>Action</p>
      </div>
      <div className=" bg-white h-32 shadow-for-bg border-2 border-black shadow-2xl py-3 mb-48 mx-48 rounded-b-2xl flex justify-around ">
        <p className=" w-1/12 overflow-hidden">
          0x326C977E6efc84E512bB9C30f76E30c160eD06FB
        </p>
        <p>0.0</p>
        <p>100</p>
        <p>23-1-23</p>
        <p>End</p>
        <p>Claimable</p>
        <button className="bg-for-bg py-1 my-1 h-10 w-14 rounded-xl text-white">
          Claim
        </button>
      </div>
    </div>
  );
};

export default Claim;
