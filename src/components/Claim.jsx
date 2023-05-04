/* global BigInt */
import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import bgImage from "../images/claimIMG.png";
import contractCreate from "../Contract";
import ClaimDetails from "./ClaimDetails";
import ClaimCalculation from "../ClaimCalculation";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const Claim = () => {
  const [list, setList] = useState([]);

  window.ethereum.on("chainChanged", () => {
    window.location.reload();
  });

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
        const vestingID = await value[9].toNumber();
        const cliffTime = await value[2].toNumber();

        let claimed = await contract.withdrawableAmount(
          signer.getAddress(),
          index
        );
        claimed == 0
          ? (claimed = 0)
          : (claimed = BigInt(value[5]) - BigInt(claimed));

        const startdate = new Date(value[1].toNumber() * 1000)
          .toLocaleString()
          .slice(0, 10);
        const enddate = new Date(
          (value[1].toNumber() + value[3].toNumber()) * 1000
        )
          .toLocaleString()
          .slice(0, 10);

        let claimableTokens = ClaimCalculation(value, index, signer);

        return {
          name,
          symbol,
          totalVested,
          startdate,
          enddate,
          claimed,
          claimableTokens,
          vestingID,
          cliffTime,
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
      <div className="grid grid-cols-9 gap-4 w-auto mx-48 bg-for-bg h-12 mt-8 rounded-t-2xl border-2 border-b-0 border-black border-b-for-bg  text-xl font-bold text-white justify-evenly py-2">
        <p className="col-span-2 flex items-center justify-center">Token</p>
        <p className="col-span-1 flex items-center justify-center">Claimed</p>
        <p className="col-span-1 flex items-center justify-center">Total</p>
        <p className="col-span-1 flex items-center justify-center">Start</p>
        <p className="col-span-1 flex items-center justify-center">End</p>
        <p className="col-span-1 flex items-center justify-center">Claimable</p>
        <p className="col-span-2 flex items-center justify-center">Action</p>
      </div>
      {list.length === 0 && (
        <div className="mx-48">
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        </div>
      )}
      <div className=" bg-white shadow-for-bg border-2 border-black shadow-2xl py-3 mb-48 mx-48 rounded-b-2xl ">
        {list.map((ele) => {
          return <ClaimDetails element={ele} />;
        })}
      </div>
    </div>
  );
};

export default Claim;
