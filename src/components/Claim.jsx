/* global BigInt */
import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import bgImage from "../images/claimIMG.png";
import contractCreate from "../Contract";
import ClaimDetails from "./ClaimDetails";
import ClaimCalculation from "../ClaimCalculation";

const Claim = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const displayData = async () => {
      const { contract, signer } = await contractCreate();
      let vestId = 0;
      let schedule = [];
      while (true) {
        let response = await contract.vestingSchedules(
          await signer.getAddress(),
          vestId
        );
        if (ethers.utils.formatEther(response[5]) != 0.0) {
          schedule.push(
            await contract.vestingSchedules(await signer.getAddress(), vestId)
          );
          vestId++;
        } else {
          break;
        }
      }
      const arr = await gettoken(schedule, contract, signer);
      setList(arr);
    };
    displayData();
  }, []);

  const gettoken = async (schedule, contract, signer) => {
    const arr = await Promise.all(
      schedule.map(async (value, index) => {
        const tokenAddress = new ethers.Contract(
          value[0],
          [
            "function name() public view returns (string)",
            "function symbol() public view returns (string)",
          ],
          signer
        );
        const name = await tokenAddress.name();
        const symbol = await tokenAddress.symbol();
        const totalVested = ethers.utils.formatEther(value[5]);
        let claimed = await contract.withdrawableAmount(
          signer.getAddress(),
          index
        );
        console.log(claimed.toNumber());
        const startdate = new Date(value[1].toNumber() * 1000)
          .toLocaleString()
          .slice(0, 10);
        const enddate = new Date(
          (value[1].toNumber() + value[3].toNumber()) * 1000
        )
          .toLocaleString()
          .slice(0, 10);
        // ClaimCalculation(value,index,signer)
        // let a = BigInt(value[5]);
        let claimableTokens = ClaimCalculation(value, index, signer);
        return {
          name,
          symbol,
          totalVested,
          startdate,
          enddate,
          claimed,
          claimableTokens,
        };
      })
    );
    return arr;
  };

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
      <div className=" bg-white shadow-for-bg border-2 border-black shadow-2xl py-3 mb-48 mx-48 rounded-b-2xl ">
        {list.map((ele) => {
          return <ClaimDetails element={ele} />;
        })}
      </div>
    </div>
  );
};

export default Claim;
