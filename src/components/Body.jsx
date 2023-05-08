import React from "react";
import bgImage from "../images/home-logo-removebg-preview.png";
import { Link } from "react-router-dom";
const Body = () => {
  return (
    <div className=" bg-for-bg h-auto">
      <div className="flex justify-around">
        <div>
          <img
            src={bgImage}
            alt="Blockchain logo"
            className="pr-1 h-96 mt-20 ml-24 shadow-2xl shadow-for-bg bg-transparent   "
          />
        </div>
        <div className=" font-lato mt-48 mb-28 text-white">
          <p className=" text-7xl ">
            <p className=" text-shade inline-block">Welcome </p> To Our
            <br></br>
            Decentralize Space
          </p>
          <Link to={"/vesting"}>
            <button className=" text-xl shadow-2xl font-bold text-for-bg bg-white rounded-md px-12 py-3 mt-10 m-auto text-center">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <button className=" shadow-2xl w-64 h-auto bg-white text-xl font-bold text-for-bg py-3 mx-24 my-6 ">
          <p>$ 393,301,205.23</p>
          <p>Total Vested Tokens</p>
        </button>
        <button className=" shadow-2xl w-64 h-auto bg-white text-xl font-bold text-for-bg py-3 mx-24 my-6 ">
          <p>$ 29,256,051.19</p>
          <p>Claimable Tokens</p>
        </button>
        <button className="shadow-2xl w-64 h-auto bg-white text-xl font-bold text-for-bg py-3 mx-24 my-6 ">
          <p>2,85,658</p>
          <p>Total Active Users</p>
        </button>
      </div>
    </div>
  );
};

export default Body;
