import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addstartDate } from "../features/startdate";

function MyCalendar() {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(getToday());

  dispatch(addstartDate({ getstartDate: startDate }));

  console.log("Start date - ", startDate);
  function getToday() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
  }
  return (
    <div>
      <input
        className="h-10 w-56 bg-tahiti border-for-bg border rounded-lg my-2 pl-3 text-lg"
        type="date"
        min={getToday()}
        required
        onChange={(e) => setStartDate(e.target.value)}
      />
    </div>
  );
}

export default MyCalendar;
