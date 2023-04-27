import React from "react";

const Stepfour = () => {
  return (
    <div className=" bg-white  shadow-for-bg shadow-md mb-5 mx-48 rounded-b-2xl text-left pb-4">
      <div className=" ml-24 pt-3 text-lg flex  ">
        <p>Start Date</p>
        <p className=" ml-80 ">Start Time </p>
      </div>
      <div className=" ml-24 pt-0 text-lg flex  ">
        <input
          type="text"
          className={`h-10 w-56 bg-tahiti border-for-bg border rounded-lg my-2 pl-3 text-lg`}
        />
        <p className=" text-2xl fa pl-2 pt-3">&#xf073;</p>

        <p className=" ml-32 ">
          <input
            type="text"
            className={`h-10 w-60 bg-tahiti border-for-bg border rounded-lg my-2 pl-3 text-lg`}
            placeholder="00:00"
          />
        </p>
      </div>
      <div className=" ml-24 pt-3 text-lg flex  ">
        <p>Vesting Period</p>
        <p className=" ml-72 ">Slice Period</p>
      </div>
      <div className=" ml-24 pt-0 text-lg flex  ">
        <input
          type="text"
          className={`h-10 w-56 bg-tahiti border-for-bg border rounded-lg my-2 pl-3 text-lg`}
          placeholder="1D/1M/1Y"
        />

        <p className=" ml-40 ">
          <input
            type="text"
            className={`h-10 w-60 bg-tahiti border-for-bg border rounded-lg my-2 pl-3 text-lg`}
            placeholder="per second"
          />
        </p>
      </div>
      <div className=" ml-24 pt-4 text-lg">
        <p className=" font-bold">Cliff </p>
      </div>
      <div className=" ml-24 pt-1 text-lg flex  ">
        <p>Cliff Time (In days)</p>
      </div>
      <div className=" ml-24 pt-0 text-lg flex  ">
        <input
          type="text"
          className={`h-10 w-56  bg-tahiti border-for-bg border rounded-lg my-2 pl-3 text-lg`}
        />
      </div>
    </div>
  );
};

export default Stepfour;
