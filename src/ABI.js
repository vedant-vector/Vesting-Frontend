export const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalTokens",
        type: "uint256",
      },
    ],
    name: "TokenDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_benificiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "vestedTopkens",
        type: "uint256",
      },
    ],
    name: "VestedTokens",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WithdrewTokens",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "address", name: "benificiary", type: "address" },
      { internalType: "uint256", name: "totalTokens", type: "uint256" },
      { internalType: "uint256", name: "startTime", type: "uint256" },
      { internalType: "uint256", name: "cliff", type: "uint256" },
      { internalType: "uint256", name: "vestingPeriod", type: "uint256" },
      { internalType: "uint256", name: "slicePeriod", type: "uint256" },
    ],
    name: "addVestingTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "checkBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "benificiary", type: "address" },
      { internalType: "uint256", name: "vestingID", type: "uint256" },
    ],
    name: "releaseTokens",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "vestingSchedules",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      { internalType: "uint256", name: "_startTime", type: "uint256" },
      { internalType: "uint256", name: "_cliff", type: "uint256" },
      {
        internalType: "uint256",
        name: "_vestingPeriod",
        type: "uint256",
      },
      { internalType: "uint256", name: "_slicePeriod", type: "uint256" },
      { internalType: "uint256", name: "_totalTokens", type: "uint256" },
      {
        internalType: "uint256",
        name: "_releasedTokens",
        type: "uint256",
      },
      { internalType: "uint256", name: "_vestedTokens", type: "uint256" },
      { internalType: "uint256", name: "_elaspTime", type: "uint256" },
      { internalType: "uint256", name: "_vestingID", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "benificiary", type: "address" },
      {
        internalType: "uint256",
        name: "withdrawAmount",
        type: "uint256",
      },
      { internalType: "uint256", name: "vestingID", type: "uint256" },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "withdrawableAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];
