import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import contractCreate from "../Contract";
import { ethers } from "ethers";

const ClaimButton = (props) => {
  const [open, setOpen] = React.useState(false);
  const [amount, setAmount] = React.useState(0);

  const handleClickOpen = () => {
    // if()
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleWithdraw = async () => {
    const { contract, signer } = await contractCreate();
    try {
      const tx = await contract
        .connect(signer)
        .withdraw(
          await signer.getAddress(),
          ethers.utils.parseEther(amount),
          props.vestingID
        );
      await tx.wait();
      window.location.reload();
      handleClose();
    } catch (error) {
      alert("Transaction Failed");
      handleClose();
    }
  };

  return (
    <div>
      {(ethers.utils.formatEther(props.claimableTokens) == 0 && (
        <Button variant="contained" disabled onClick={handleClickOpen}>
          Collected
        </Button>
      )) ||
        (props.cliffTime < Math.floor(Date.now() / 1000) && (
          <Button variant="contained" onClick={handleClickOpen}>
            Withdraw
          </Button>
        ))}
      {props.cliffTime >= Math.floor(Date.now() / 1000) && (
        <Button variant="contained" disabled onClick={handleClickOpen}>
          Locked
        </Button>
      )}
      {}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Withdraw money</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the amount you wish to withdraw:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="amount"
            label="Amount"
            type="number"
            fullWidth
            variant="standard"
            value={amount}
            onChange={handleAmountChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleWithdraw}>Withdraw</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ClaimButton;
