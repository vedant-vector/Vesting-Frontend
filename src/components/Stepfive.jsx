import React from "react";

const Stepfive = () => {
  return (
    <div className=" bg-white  shadow-for-bg shadow-md  mb-5 mx-48 rounded-b-2xl text-left pb-4">
      <p className="ml-24 pt-3 text-lg">Token Amount</p>
      <div className=" ml-24 pt-0 text-lg flex  ">
        <input
          type="text"
          className={`h-10 w-56 bg-tahiti border-for-bg border rounded-lg my-2 pl-3 text-lg`}
        />
        <p className=" ml-20 pt-3 ">Balance</p>
        <p className=" ml-5 ">
          <input
            type="text"
            className={`h-10 w-60  bg-tahiti border-for-bg border rounded-lg my-2 pl-3 text-lg`}
            placeholder="0.0"
          />
        </p>
      </div>
    </div>
  );
};

export default Stepfive;
