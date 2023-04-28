import { ethers } from "ethers";
import { abi } from "./ABI";

const contractCreate = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    "0x2eC9BB61161442106090097cE7eF824c898Ee65d",
    abi,
    signer
  );

  return contract;
};

export default contractCreate;
