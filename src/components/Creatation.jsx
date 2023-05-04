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
    const { contract, signer } = await contractCreate();
    try {
      const tokenContract = new ethers.Contract(
        tokenAddress,
        ["function approve(address , uint256) returns (bool)"],
        signer
      );
      await tokenContract
        .connect(signer)
        .approve(contract.address, totalTokens);

      const contractInstance = contract.connect(signer);
      await contractInstance.addVestingTokens(
        tokenAddress,
        benificiaryAddress,
        totalTokens,
        startTime,
        cliff,
        vestingPeriod,
        slice
      );
    } catch (error) {
      console.log(error);
    }
    if (!validateInputs()) {
      return;
    }
  };

  const validateInputs = () => {
    // Check if all required input fields are filled
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

    // Check if input values are in correct format
    // if (!/^\d+$/.test(totalTokens)) {
    //   alert("Token amount must be a positive integer");
    //   return false;
    // }

    // Add more validation checks as needed

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
