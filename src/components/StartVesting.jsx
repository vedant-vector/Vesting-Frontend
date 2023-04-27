import React, { useState } from "react";
import MyCalendar from "./startCalendar";
import { useDispatch } from "react-redux";
import { addstarttime } from "../features/starttime";

const StartVesting = () => {
  const dispatch = useDispatch();
  const [start, setStart] = useState("00:00");
  const handleChange = (e) => {
    setStart(e.target.value);
  };
  dispatch(addstarttime({ getstarttime: start }));
  console.log(start);
  return (
    <div>
      <div className=" ml-24 pt-3 text-lg flex  ">
        <p>Start Date</p>
        <p className=" ml-80 ">Start Time </p>
      </div>
      <div className=" ml-24 pt-0 text-lg flex  ">
        <MyCalendar />
        <p className=" ml-40 ">
          <input
            type="time"
            className={`h-10 w-60 bg-tahiti border-for-bg border rounded-lg my-2 pl-3 text-lg`}
            placeholder="00:00"
            required
            onChange={handleChange}
          />
        </p>
      </div>
    </div>
  );
};

export default StartVesting;
