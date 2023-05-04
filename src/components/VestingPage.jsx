import React from "react";
import HeadingBar from "./HeadingBar";
import Stepone from "./Stepone";
import Steptwo from "./Steptwo";
import Stepthree from "./Stepthree";
import Stepfour from "./Stepfour";
import Stepfive from "./Stepfive";
import Creatation from "./Creatation";

const VestingPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
  };
  return (
    <div className="">
      <p className=" text-5xl pl-24 pt-7 text-left text-for-bg  block">
        Create Your Vesting...
      </p>

      <div>
        <form>
          <HeadingBar title={"Step -1  Select Network"} />
          <Stepone />
          <HeadingBar title={"Step -2  Enter Token Address"} />
          <Steptwo />
          <HeadingBar title={"Step -3  Enter Wallet Address"} />
          <Stepthree />
          <HeadingBar title={"Step -4  Enter Vesting Details"} />
          <Stepfour />
          <HeadingBar title={"Step -5  Enter Token Amount"} />
          <Stepfive />
          <Creatation />
        </form>
      </div>
    </div>
  );
};

export default VestingPage;
