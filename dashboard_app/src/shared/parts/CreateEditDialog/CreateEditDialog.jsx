import React, { useRef } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { NotesData } from "../../../core/mocks/mocks";

const CreateEditDialog = ({ open, handleClose }) => {
  const valueRef = useRef("");

  const createNewNote = () => {
    handleClose();
    console.log({
      id: NotesData.length > 0 ? NotesData[NotesData.length - 1].id : 0 + 1,
      author: "???",
      text: valueRef.current.value,
      date: new Date().toDateString(),
    });
    return NotesData.push({
      id: NotesData.length > 0 ? NotesData[NotesData.length - 1].id : 0 + 1,
      author: "???",
      text: valueRef.current.value,
      date: new Date().toDateString(),
    });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiPaper-root": {
          color: "aquamarine",
          backgroundColor: "black",
          borderRadius: "1rem",
        },
      }}
    >
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          multiline
          margin="dense"
          id="note"
          label="Note"
          type="text"
          fullWidth
          variant="standard"
          inputRef={valueRef}
          sx={{
            width: "540px",
            height: "120px",
            "& .MuiFormLabel-root": { color: "aquamarine" },
            "& .MuiInputBase-root": { color: "white" },
            "& .MuiInput-root:after": { borderBottom: "none" },
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} sx={{ color: "aquamarine" }}>
          Cancel
        </Button>
        <Button onClick={createNewNote} sx={{ color: "aquamarine" }}>
          Post
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateEditDialog;