import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addendDate } from "../features/enddate";

const EndCalendar = () => {
  const [endDate, setEndDate] = useState(getToday());
  const dispatch = useDispatch();
  const startdateField = useSelector((state) => state.startdateField.value);
  const newStartDate = new Date(startdateField.getstartDate);
  newStartDate.setDate(newStartDate.getDate() + 1);

  dispatch(addendDate({ getendDate: endDate }));

  function getToday() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate() + 1;
    return `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
  }
  return (
    <div>
      <input
        className="h-10 w-56 bg-tahiti border-for-bg border rounded-lg my-2 pl-3 text-lg"
        type="date"
        min={newStartDate.toISOString().slice(0, 10)}
        onChange={(e) => setEndDate(e.target.value)}
        required
      />
    </div>
  );
};

export default EndCalendar;
