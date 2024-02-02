import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

interface bambooProps {
  children: React.ReactNode;
  btnTxt: string;
}

function BambooItemModal({ btnTxt, children }: bambooProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="text" onClick={handleClickOpen}>
        {btnTxt}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {children}
      </Dialog>
    </React.Fragment>
  );
}

export default BambooItemModal;