import { ethers } from "ethers";
import { abi } from "./ABI";

const contractCreate = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    "0xc2813415841262e5899E2F0Ff46B797A09CF91D8",
    abi,
    signer
  );
  return { contract, signer };
};

export default contractCreate;
