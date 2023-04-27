import React from "react";

const Stepthree = () => {
  return (
    <div className=" bg-white  shadow-for-bg shadow-md mb-5 mx-48 rounded-b-2xl text-left pb-4">
      <div className=" ml-24 pt-3 text-lg">
        <p>Beneficiary Address</p>

        <input
          type="text"
          className={`h-10 w-96  bg-tahiti border-for-bg border rounded-lg my-2 pl-3 text-lg`}
        />
        <p className=" text-base">
          e.g. 0xCC4304A31d09258b0029eA7FE63d032f52e44EFe
        </p>
      </div>
    </div>
  );
};

export default Stepthree;
