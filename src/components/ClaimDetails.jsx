import { ethers } from "ethers";
import React from "react";

const ClaimDetails = (props) => {
  return (
    <p className=" mb-11 shadow-sm m-auto text-xl flex justify-around ">
      <p>
        {props.element.name} ({props.element.symbol})
      </p>
      <p>{props.element.claimed.toNumber()}</p>
      <p>{props.element.totalVested}</p>
      <p>{props.element.startdate} </p>
      <p>{props.element.enddate} </p>

      <p>{ethers.utils.formatEther(props.element.claimableTokens)}</p>
      {/* <p>{component}</p> */}
      <button className="bg-for-bg py-1 my-1 h-10 w-14 rounded-xl text-white">
        Claim
      </button>
    </p>
  );
};

export default ClaimDetails;
