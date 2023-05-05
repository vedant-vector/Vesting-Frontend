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
  let slice = 0;

  if (slicetimeField.getsliceTime === "noslice") {
    slice = vestingPeriod;
  } else {
    slice = slicetimeField.getsliceTime;
  }

  const vesting = async (e) => {
    e.preventDefault();
    if (!validateInputs()) {
      return;
    }
    const { contract, signer } = await contractCreate();
    try {
      const tokenContract = new ethers.Contract(
        tokenAddress,
        ["function approve(address , uint256) returns (bool)"],
        signer
      );
      console.log("Hi1");
      const approveTx = await tokenContract
        .connect(signer)
        .approve(contract.address, totalTokens);
      await approveTx.wait();
      console.log("Hi2");
      const contractInstance = contract.connect(signer);
      const createTx = await contractInstance.addVestingTokens(
        tokenAddress,
        benificiaryAddress,
        totalTokens,
        startTime,
        cliff,
        vestingPeriod,
        slice
      );
      await createTx.wait();
      alert("Vesting Created Successfully..");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const validateInputs = () => {
    if (startdateField.getstartDate >= enddateField.getendDate) {
      alert("Invalid Dates");
      return false;
    }
    if (
      !tokenAddress ||
      !benificiaryAddress ||
      !totalTokens ||
      !startTime ||
      !vestingPeriod
    ) {
      alert("Please fill all required fields");
      return false;
    }

    return true;
  };

  return (
    <button
      type="submit"
      className=" h-14 mt-16 mb-10 pb-1 w-72 text-3xl rounded-3xl bg-for-bg text-white"
      onClick={(e) => {
        vesting(e);
      }}
    >
      Confirm Vesting
    </button>
  );
};

export default Creatation;
