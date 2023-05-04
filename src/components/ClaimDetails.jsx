import { ethers } from "ethers";
import React from "react";
import ClaimButton from "./ClaimButton";

const ClaimDetails = (props) => {
  return (
    <div className="grid grid-cols-9 gap-4 mb-4 py-4 px-6 bg-white rounded-xl shadow-sm">
      <div className="col-span-2 flex items-center justify-center">
        <p className="text-lg font-bold mr-2">
          {props.element.name} ({props.element.symbol})
        </p>
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <p className="text-lg font-medium">
          {ethers.utils.formatEther(props.element.claimed)}
          {/* {.slice(0, 9)} */}
        </p>
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <p className="text-lg font-medium">{props.element.totalVested}</p>
      </div>
      <div className="col-span-1 ml-2 flex items-center justify-center">
        <p className="text-lg font-medium">{props.element.startdate}</p>
      </div>
      <div className="col-span-1 ml-4 flex items-center justify-center">
        <p className="text-lg font-medium">{props.element.enddate}</p>
      </div>
      <div className="col-span-1 ml-4 flex items-center justify-center">
        <p className="text-lg font-bold text-lime-700 ">
          {ethers.utils.formatEther(props.element.claimableTokens)}
        </p>
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <p className="text-lg pl-10 font-medium">
          <ClaimButton
            vestingID={props.element.vestingID}
            cliffTime={props.element.cliffTime}
            claimableTokens={props.element.claimableTokens}
          />
        </p>
      </div>
    </div>
  );
};

export default ClaimDetails;
