import { ethers } from "ethers";
import { abi } from "./ABI";

const contractCreate = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();

  //New adddress 0xA5c33a1C325585b1084dAD0334Db04D52f765fE5
  // odl :- 0x2eC9BB61161442106090097cE7eF824c898Ee65d
  const contract = new ethers.Contract(
    "0x7da681f07694731695C3559181A9D0F5569C7EB7",
    abi,
    signer
  );
  return { contract, signer };
};

export default contractCreate;
