import React, { useState } from "react";
import { addcliff } from "../features/takecliff";
import { useDispatch } from "react-redux";

const Cliff = () => {
  const dispatch = useDispatch();
  const [cliff, setCliff] = useState(0);
  const handlechange = (e) => {
    setCliff(e.target.value);
  };
  dispatch(addcliff({ getcliff: cliff }));
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
          type="number"
          className={`h-10 w-56  bg-tahiti border-for-bg border rounded-lg my-2 pl-3 text-lg`}
          placeholder="0"
          min="0"
          required
          onChange={handlechange}
          onKeyDown={(e) => {
            if (
              e.key !== "Backspace" &&
              e.key !== "Delete" &&
              isNaN(Number(e.key))
            ) {
              e.preventDefault();
            }
          }}
        />
      </div>
    </div>
  );
};

export default Cliff;
