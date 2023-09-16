import * as React from "react";
import { Box, List, ListItem } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CircleIcon from "@mui/icons-material/Circle";

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
          <List>
            <ListItem>
              Make the payment using the QR code (located in the last image of
              the slider).
            </ListItem>
            <ListItem>
              Upload the transaction screenshot.
            </ListItem>
            <ListItem>
              Enter the same transaction ID in the input box.
            </ListItem>
          </List>
        </DialogContentText>
        <Box sx={{ mt: "1em" }}>
          <Button onClick={handleClose} variant="contained">
            Agree
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
