import * as React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <DialogTitle id="alert-dialog-title">{"Instructions"}</DialogTitle>
      <DialogContent sx={{ p: "1em" }}>
        <DialogContentText id="alert-dialog-description">
          1.transactionID should match with the screeshot otherwise you will not
          getting t shirt.
          <br />
          2. Size would not be changed
        </DialogContentText>
        <Box sx={{mt: "1em"}}>
          <Button onClick={handleClose} variant="contained">
            Agree
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
