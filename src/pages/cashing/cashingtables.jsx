import React, { useState } from "react";
import { Button, Box, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

const CashingTables = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Modal Title</DialogTitle>
        <DialogContent>
          <p>This is the content of the modal.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CashingTables;
