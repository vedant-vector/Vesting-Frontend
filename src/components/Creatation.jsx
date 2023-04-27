import React from "react";
import { useSelector } from "react-redux";

const Creatation = () => {
  const tokenField = useSelector((state) => state.tokenField.value);
  const benificiaryField = useSelector((state) => state.benificiaryField.value);
  const startdateField = useSelector((state) => state.startdateField.value);
  const enddateField = useSelector((state) => state.enddateField.value);
  const starttimeField = useSelector((state) => state.starttimeField.value);
  const endtimeField = useSelector((state) => state.endtimeField.value);

  return (
    <div>
      <button className=" h-14 mt-16 mb-10 pb-1 w-72 text-3xl rounded-3xl bg-for-bg text-white">
        Confirm Vesting
      </button>
      <h1>{tokenField.tokenAddress}</h1>
      <h1>{benificiaryField.benificiaryAddress}</h1>
      <h1>{startdateField.getstartDate}</h1>
      <h1>{enddateField.getendDate}</h1>
      <h1>{starttimeField.getstarttime}</h1>
      <h1>{endtimeField.getendtime}</h1>
    </div>
  );
};

export default Creatation;
