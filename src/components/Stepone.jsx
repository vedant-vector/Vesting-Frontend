import { ethers } from "ethers";
import React from "react";
import ethLogo from "../images/ethereum-eth-logo.png";
import mumbaiLogo from "../images/polygon-matic-logo.png";

const networks = {
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://polygon-rpc.com/"],
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
  mumbai: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Polygon",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: [
      "https://matic-mumbai.chainstacklabs.com",
      "https://rpc-mumbai.maticvigil.com",
      "https://matic-testnet-archive-rpc.bwarelabs.com",
    ],
    blockExplorerUrls: ["https://mumbai.polygonscan.com"],
  },
};

const Stepone = () => {
  const handleNetworkSwitch = async (newchainID, networkname, e) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    try {
      await provider.send("eth_requestAccounts", []);
    } catch (error) {
      if (error.code === 4001) {
        alert("Request Rejected");
      }
    }
    const { chainId } = await provider.getNetwork();

    if (chainId !== newchainID) {
      try {
        if (!window.ethereum) throw new Error("No crypto wallet found");
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [
            {
              chainId: `0x${Number(newchainID).toString(16)}`,
            },
          ],
        });
      } catch (err) {
        console.log(err.code);
        if (err.code === 4902) {
          try {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  ...networks[networkname],
                },
              ],
            });
          } catch (err) {}
        }
      }
    }
  };

  return (
    <div className=" bg-white shadow-for-bg shadow-lg py-3 mb-5 mx-48 rounded-b-2xl">
      {/* <form action="#"> */}
      <p className="ml-24 pt-1 text-xl text-left">
        Select Blockchain Network Of Your Token:-
      </p>

      <div className=" bg-tahiti shadow-md h-16 rounded-2xl my-3 ml-48 w-96 inline-block float-left">
        <div className="float-right pt-6 pr-7 ">
          <input
            type="radio"
            name="network"
            id="0"
            className=" float-right  cursor-pointer "
            onClick={(e) => handleNetworkSwitch(1, "ethereum", e)}
          />
        </div>
        <div>
          <img
            src={ethLogo}
            alt="Ethereum Logo"
            className=" max-h-11 pl-5 pt-0 mt-2 float-left"
          />
        </div>
        <div className=" w-max">
          <p className="pt-1 text-xl text-left ml-9 pl-10">Ethereum Mainnet</p>
          <p className=" text-left ml-9 pl-10 pb-6 ">ETH</p>
        </div>
      </div>
      <div className=" bg-tahiti h-16 shadow-md rounded-2xl my-3 w-96 inline-block ">
        <div className="float-right pt-6 pr-7 ">
          <input
            type="radio"
            name="network"
            id="1"
            className=" float-right cursor-pointer"
            onClick={() => handleNetworkSwitch(11155111, "sepolia")}
            required
          />
        </div>
        <div>
          <img
            src={ethLogo}
            alt="Ethereum Logo"
            className=" max-h-11 pl-5 pt-0 mt-2 float-left"
          />
        </div>
        <div className="">
          <p className="pt-1 text-xl text-left ml-9 pl-10">Sepolia Testnet</p>
          <p className=" text-left ml-9 pl-10 pb-6 ">ETH</p>
        </div>
      </div>
      <div>
        <div className=" bg-tahiti h-16 shadow-md rounded-2xl my-3 ml-48 w-96 inline-block float-left">
          <div className="float-right pt-6 pr-7 ">
            <input
              type="radio"
              name="network"
              id="3"
              className=" float-right cursor-pointer"
              onClick={() => handleNetworkSwitch(137, "polygon")}
            />
          </div>
          <div>
            <img
              src={mumbaiLogo}
              alt="Mumbai Logo"
              className=" max-h-12 pl-5 pt-3 float-left"
            />
          </div>
          <div className="">
            <p className="pt-1 text-xl text-left ml-9 pl-10">Polygon Mainnet</p>
            <p className=" text-left ml-9 pl-10 pb-6 ">Matic</p>
          </div>
        </div>
        <div className=" bg-tahiti h-16 shadow-md rounded-2xl my-3 w-96 inline-block">
          <div className="float-right pt-6 pr-7 ">
            <input
              type="radio"
              name="network"
              id="4"
              className=" float-right cursor-pointer"
              onClick={() => handleNetworkSwitch(80001, "mumbai")}
            />
          </div>
          <div>
            <img
              src={mumbaiLogo}
              alt="Mumbai Logo"
              className=" max-h-12 pl-5 pt-3 float-left"
            />
          </div>
          <div className="">
            <p className="pt-1 text-xl text-left ml-9 pl-10">Polygon Testnet</p>
            <p className=" text-left ml-9 pl-10 pb-6 ">Matic</p>
          </div>
        </div>
      </div>
      {/* </form> */}
    </div>
  );
};

export default Stepone;
