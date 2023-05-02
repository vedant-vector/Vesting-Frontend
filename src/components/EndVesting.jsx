import React, { useState } from "react";
import EndCalendar from "./EndCalendar";
import { useDispatch } from "react-redux";
import { addendtime } from "../features/endtime";
import { addSlice } from "../features/slicetime";

const EndVesting = () => {
  const dispatch = useDispatch();
  const [end, setEnd] = useState("00:00");
  const [slice, setSlice] = useState("noslice");
  const handleChange = (e) => {
    setEnd(e.target.value);
  };
  dispatch(addendtime({ getendtime: end }));
  console.log(end);
  const handleSlice = (e) => {
    setSlice(e.target.value);
  };
  console.log(slice);
  dispatch(addSlice({ getsliceTime: slice }));

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
            required
          />
        </p>
        <p className=" ml-52 text-lg inline">
          <select
            name="slice"
            id="slice"
            className="h-10 w-60 bg-tahiti border-for-bg border rounded-lg my-2 ml-0 pl-3 text-lg"
            onChange={handleSlice}
            required
          >
            <option value="noslice">No Slice</option>
            <option value="1">per seconds</option>
            <option value="60">per minutes</option>
            <option value="3600">per hour</option>
            <option value="86400">per day</option>
          </select>
        </p>
      </div>
    </div>
  );
};

export default EndVesting;
