/* global BigInt */
import React from "react";

const ClaimCalculation = (scheduleValue, vestingId, signer) => {
  const starTime = scheduleValue[1].toNumber();
  const vestingPeriod = scheduleValue[3].toNumber();
  const slicePeriod = scheduleValue[4].toNumber();
  const totalTokens = BigInt(scheduleValue[5]);
  let releasedTokens = BigInt(scheduleValue[6]);
  let vestedTokens = BigInt(scheduleValue[7]);
  let elapsTime = scheduleValue[8].toNumber();
  let currentTime = Math.floor(Date.now() / 1000);
  //Math.floor(Date.now() / 1000)
  //   if(schedule[])

  if (starTime + slicePeriod > currentTime || releasedTokens >= totalTokens) {
    return 0;
  }
  let intervals = Math.floor(vestingPeriod / slicePeriod);
  let tokensInInterval = Math.floor(Number(totalTokens / BigInt(intervals)));
  if (currentTime >= starTime + vestingPeriod) {
    currentTime = starTime + vestingPeriod;
  }
  elapsTime = currentTime - starTime;
  let intervalElapsed = Math.floor(elapsTime / slicePeriod);

  vestedTokens =
    BigInt(intervalElapsed) * BigInt(tokensInInterval) - releasedTokens;
  releasedTokens += vestedTokens;

  if (intervalElapsed >= intervals) {
    vestedTokens += totalTokens - releasedTokens;
    releasedTokens = totalTokens;
  }
  return vestedTokens;
};

export default ClaimCalculation;
