import React, { useState } from "react";
import EndCalendar from "./EndCalendar";
import { useDispatch } from "react-redux";
import { addendtime } from "../features/endtime";

const EndVesting = () => {
  const dispatch = useDispatch();
  const [end, setEnd] = useState("00:00");
  const handleChange = (e) => {
    setEnd(e.target.value);
  };
  dispatch(addendtime({ getendtime: end }));
  console.log(end);
  return (
    <div>
      <div className=" ml-24 pt-3 text-lg flex  ">
        <p>End Date</p>
        <p className=" ml-80 ">End Time </p>
        <p className=" ml-96 bold">Slice Period</p>
      </div>
      <div className=" ml-24 pt-0 text-lg flex  ">
        <EndCalendar />
        <p className=" ml-40 inline ">
          <input
            type="time"
            className={`h-10 w-60 bg-tahiti border-for-bg border rounded-lg my-2 pl-3 text-lg`}
            placeholder="00:00"
            onChange={handleChange}
          />
        </p>
        <p className=" ml-52 text-lg inline">
          <select
            name="slice"
            id="slice"
            className="h-10 w-60 bg-tahiti border-for-bg border rounded-lg my-2 ml-0 pl-3 text-lg"
          >
            <option value="second">per seconds</option>
            <option value="minute">per minutes</option>
            <option value="hour">per hour</option>
            <option value="day">per day</option>
          </select>
        </p>
      </div>
    </div>
  );
};

export default EndVesting;
