import React, { createContext, useState } from "react";

// const tokenAddress = createContext();

const Steptwo = () => {
  const [token, setTokenValue] = useState("");
  const handleChange = (event) => {
    setTokenValue(event.target.value);
  };

  return (
    <div className=" bg-white  shadow-for-bg shadow-md  mb-5 mx-48 rounded-b-2xl text-left pb-4">
      <div className=" ml-24 pt-3 text-lg">
        <p>
          Enter the address of the token you are vesting. This can be found
          under the 'Profile Summary' section of any blockexplorer.
        </p>
        <p>Token Address:-</p>

        <input
          type="text"
          className={`h-10 w-96 bg-tahiti border-for-bg border rounded-lg my-2 pl-3 text-lg`}
          onChange={handleChange}
        />
        <p className=" text-base">
          e.g. 0xCC4304A31d09258b0029eA7FE63d032f52e44EFe
        </p>
      </div>
    </div>
  );
};

export default Steptwo;
