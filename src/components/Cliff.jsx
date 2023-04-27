import React from "react";

const Cliff = () => {
  return (
    <div>
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

export default Cliff;
