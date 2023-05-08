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
        <form>
          <HeadingBar title={" Select Network"} />
          <Stepone />
          <HeadingBar title={" Enter Token Address"} />
          <Steptwo />
          <HeadingBar title={" Enter Wallet Address"} />
          <Stepthree />
          <HeadingBar title={" Enter Vesting Details"} />
          <Stepfour />
          <HeadingBar title={" Enter Token Amount"} />
          <Stepfive />
          <Creatation />
        </form>
      </div>
    </div>
  );
};

export default VestingPage;
