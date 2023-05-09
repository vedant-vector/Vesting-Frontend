import React, { useEffect, useState } from "react";
import logo from "../images/my-logo.png";
import { Link } from "react-router-dom";
import { ethers } from "ethers";

const Header = () => {
  const [isConnected, setConnection] = useState(false);
  const [address, setAddress] = useState(null);
  const [reload, setReload] = useState(false);

  let signer;
  useEffect(() => {
    let ad = localStorage.getItem("Account");

    const connection = localStorage.getItem("Connection");
    if (ad) {
      ad =
        localStorage.getItem("Account").slice(0, 6) +
        "..." +
        localStorage.getItem("Account").slice(-4);
      setAddress(ad);
    }
    if (connection === "true") {
      setConnection(true);
    }
  }, [reload]);

  const walletConnect = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      signer = provider.getSigner();
      let ad = await signer.getAddress();
      ad = ad.slice(0, 6) + "..." + ad.slice(-4);
      setAddress(ad);
      setConnection(true);
      const copyToClipboard = async () => {
        navigator.clipboard.writeText(await signer.getAddress());
      };
      copyToClipboard();
      localStorage.setItem("Account", await signer.getAddress());
      localStorage.setItem("Connection", true);
    } catch (err) {
      if (err.code === 4001) {
        setConnection(false);
        setAddress(null);
      }
      localStorage.setItem("Connection", false);
      localStorage.removeItem("Account");

      setReload(true);
      window.location.reload();
    }
  };

  try {
    window.ethereum.on("accountsChanged", walletConnect);
  } catch (error) {
    alert("Metamask Wallet Not Found!!  ");
  }

  return (
    <div className="h-18 border-b-2 shadow-for-bg shadow-2xl flex">
      <Link to={"/home"}>
        <img
          src={logo}
          alt="Vesting Vector"
          className=" h-20 ml-10 mt-2 px-6 py-3 "
        />
      </Link>

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
        title="Click to copy address"
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
