import { ethers } from "ethers";
import { abi } from "./ABI";

const contractCreate = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();

  //New adddress 0xA5c33a1C325585b1084dAD0334Db04D52f765fE5
  // odl :- 0x7da681f07694731695C3559181A9D0F5569C7EB7

  //Newest :- 0x6c7525ba73658bbD108D3fEd764b9B9811F90860
  const contract = new ethers.Contract(
    "0x6c7525ba73658bbD108D3fEd764b9B9811F90860",
    abi,
    signer
  );
  return { contract, signer };
};

export default contractCreate;
