import React, { useState } from "react";
import { addTokenAmount } from "../features/tokenAmount";
import { useDispatch } from "react-redux";
import contractCreate from "../Contract";
import { useSelector } from "react-redux";
import { ethers } from "ethers";

const Stepfive = () => {
  const tokenField = useSelector((state) => state.tokenField.value);
  const benificiaryField = useSelector((state) => state.benificiaryField.value);

  const dispatch = useDispatch();
  const [tokenAmount, setTokenAmount] = useState(0);
  const handlechange = (e) => {
    setTokenAmount(e.target.value);
  };
  console.log(tokenAmount);
  dispatch(addTokenAmount({ gettokenamount: tokenAmount }));

  const [balance, setBalance] = useState(0);
  const displayBalance = async () => {
    const { contract, signer } = await contractCreate();
    setBalance(
      ethers.utils.formatEther(
        await contract.checkBalance(
          tokenField.tokenAddress,
          benificiaryField.benificiaryAddress
        )
      )
    );
  };
  displayBalance();

  return (
    <div className=" bg-white  shadow-for-bg shadow-md  mb-5 mx-48 rounded-b-2xl text-left pb-4">
      <p className="ml-24 pt-3 text-lg">Token Amount</p>
      <div className=" ml-24 pt-0 text-lg flex  ">
        <input
          type="number"
          required
          className={`h-10 w-56 bg-tahiti border-for-bg border rounded-lg my-2 pl-3 text-lg`}
          onChange={handlechange}
          onKeyDown={(e) => {
            if (
              e.key !== "Backspace" &&
              e.key !== "Delete" &&
              e.key !== "." &&
              isNaN(Number(e.key))
            ) {
              e.preventDefault();
            }
          }}
        />
        <p className=" ml-20 pt-3 ">Balance</p>
        <p className=" ml-5 ">
          <input
            type="text"
            className={`h-10 w-60  bg-tahiti border-for-bg border rounded-lg my-2 pl-3 text-lg cursor-not-allowed`}
            placeholder="0.0"
            value={balance}
            disabled
          />
        </p>
      </div>
    </div>
  );
};

export default Stepfive;
