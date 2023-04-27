import React from "react";
import logo from "../images/my-logo.png";

const Footer = () => {
  return (
    <div className=" h-36 flex text-xl pt-6 border-t-2 ">
      <div className=" mx-11 my-4 ml-32 text-left">
        <p className="my-2 font-bold">About</p>
        <ul>
          <li>
            <a href="#">Vesting</a>
          </li>
          <li>
            <a href="#">Developer</a>
          </li>
        </ul>
      </div>
      <div className=" mx-11 my-4 text-left">
        <p className="my-2 font-bold">Social</p>
        <ul>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">LinkedIN</a>
          </li>
        </ul>
      </div>
      <div className=" mx-11 my-4 text-left">
        <p className="my-2 font-bold">Contact</p>
        <ul>
          <li>
            <a href="#">vedant@simformsolutions.com</a>
          </li>
        </ul>
      </div>
      <div className=" m-auto mr-12 text-right  justify-end">
        <img src={logo} alt="#" className=" h-12 " />
        <p className=" text-sm text-center pt-3">
          © 2023 Vedant-Soni, All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
