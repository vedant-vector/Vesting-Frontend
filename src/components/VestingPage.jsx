import React from "react";
import HeadingBar from "./HeadingBar";
import Stepone from "./Stepone";
import Steptwo from "./Steptwo";
import Stepthree from "./Stepthree";
import Stepfour from "./Stepfour";
import Stepfive from "./Stepfive";
import Creatation from "./Creatation";

const VestingPage = () => {
  return (
    <div className="">
      <p className=" text-5xl pl-24 pt-7 text-left text-for-bg  block">
        Create Your Vesting...
      </p>

      <div>
        <form action="">
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
          <button type="submit">
            <Creatation />
          </button>
        </form>
      </div>
    </div>
  );
};

export default VestingPage;
