import { ethers } from "ethers";
import React from "react";
import { useSelector } from "react-redux";
import contractCreate from "../Contract";

const Creatation = () => {
  const tokenField = useSelector((state) => state.tokenField.value);
  const benificiaryField = useSelector((state) => state.benificiaryField.value);
  const startdateField = useSelector((state) => state.startdateField.value);
  const enddateField = useSelector((state) => state.enddateField.value);
  const starttimeField = useSelector((state) => state.starttimeField.value);
  const endtimeField = useSelector((state) => state.endtimeField.value);
  const slicetimeField = useSelector((state) => state.slicetimeField.value);
  const cliffField = useSelector((state) => state.cliffField.value);
  const tokenAmountField = useSelector((state) => state.tokenAmountField.value);

  const startdateTime =
    startdateField.getstartDate + " " + starttimeField.getstarttime;
  const startUnixTimestamp = new Date(startdateTime).getTime() / 1000;

  const enddateTime = enddateField.getendDate + " " + endtimeField.getendtime;
  const endUnixTimestamp = new Date(enddateTime).getTime() / 1000;

  const tokenAddress = tokenField.tokenAddress;
  const benificiaryAddress = benificiaryField.benificiaryAddress;
  const totalTokens = tokenAmountField.gettokenamount;
  const startTime = startUnixTimestamp;
  const cliff = cliffField.getcliff * 86400;
  const vestingPeriod = endUnixTimestamp - startTime;

  if (slicetimeField.getsliceTime == "noslice") {
    const slice = vestingPeriod;
  } else {
    const slice = slicetimeField.getsliceTime;
  }

  const vesting = async (e) => {
    e.preventDefault();
    const { contract, signer } = await contractCreate();
    console.log(await signer.getAddress());

    // await contract.addVestingTokens()
    // const tokenContract = new ethers.Contract(
    //   tokenAddress,
    //   ["function approve(address, uint256) public  returns (bool)"],
    //   signer
    // );
    // let tx = await tokenContract.connet(signer);

    // tx = await tx.approve(contract.address, totalTokens);
    // await tx.wait();
  };

  return (
    <div>
      <button
        className=" h-14 mt-16 mb-10 pb-1 w-72 text-3xl rounded-3xl bg-for-bg text-white"
        onClick={vesting}
      >
        Confirm Vesting
      </button>
      {/* <h1>{tokenField.tokenAddress}</h1>
      <h1>{benificiaryField.benificiaryAddress}</h1>
      <h1>{startdateField.getstartDate}</h1>
      <h1>{enddateField.getendDate}</h1>
      <h1>{starttimeField.getstarttime}</h1>
      <h1>{endtimeField.getendtime}</h1>
      <h1>{slicetimeField.getslicetime}</h1>
      <h1>{cliffField.getcliff}</h1>
      <h1>{tokenAmountField.gettokenamount}</h1> */}
    </div>
  );
};

export default Creatation;