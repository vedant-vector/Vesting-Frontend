import React, { useEffect, useState } from "react";
import logo from "../images/my-logo.png";
import { Link } from "react-router-dom";
import { ethers } from "ethers";

const Header = () => {
  const [isConnected, setConnection] = useState(false);
  const [address, setAddress] = useState("");

  let signer;
  useEffect(() => {
    const ad = localStorage.getItem("Account");
    const connection = localStorage.getItem("Connection");
    if (ad) {
      setAddress(ad);
    }
    if (connection === "true") {
      setConnection(true);
    }
  }, []);

  const walletConnect = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      signer = provider.getSigner();
      setAddress(await signer.getAddress());
      setConnection(true);
      localStorage.setItem("Account", await signer.getAddress());
      localStorage.setItem("Connection", true);
    } catch (err) {
      if (err.code === 4001) {
        setConnection(false);
        setAddress("");
        localStorage.setItem("Connection", false);
        localStorage.removeItem("Account");
      }
    }
  };

  window.ethereum.on("accountsChanged", walletConnect);

  return (
    <div className="h-18 border-b-2 shadow-for-bg shadow-2xl flex">
      <img
        src={logo}
        alt="Vesting Vector"
        className=" h-20 ml-10 mt-2 px-6 py-3 "
      />

      <ul className="flex m-auto mr-2 text-xl pl-2">
        <Link to={"/home"}>
          <li className="mx-3">Home</li>
        </Link>
        <Link to={"/claim"}>
          <li className="mx-3">Claim</li>
        </Link>
        <li className="mx-3">Social</li>
      </ul>
      <button
        onClick={walletConnect}
        className=" w-40 px-3 text-xl h-auto m-auto mx-10 overflow-hidden rounded-3xl bg-for-bg text-white"
      >
        {isConnected
          ? address
            ? address
            : localStorage.getItem("Account")
          : "Connect Wallet"}
      </button>
    </div>
  );
};

export default Header;
