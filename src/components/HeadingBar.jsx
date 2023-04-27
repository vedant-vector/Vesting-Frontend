import React from "react";

const HeadingBar = (props) => {
  return (
    <div className=" w-auto mx-48 bg-for-bg h-12 mt-8 rounded-t-2xl">
      <p className=" text-white text-2xl text-left pl-9 pt-2 font-bold">
        {props.title}
      </p>
    </div>
  );
};

export default HeadingBar;
