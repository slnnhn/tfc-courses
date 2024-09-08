import React from "react";

import { Box, Typography, Button, Divider, InputLabel, TextField, Modal, colors } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 400,
  border: "2px solid #000",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ReusableModal({ open, handleClose, selectedCourse, selectedUser, handleDelete }) {
  const { title, description } = selectedCourse || {};
  const { firstName, lastName, email } = selectedUser || {};

  console.log("title", description);
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 400,
          border: "2px solid #000",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          textAlign: "center",
        }}
      >
        <Typography id="modal-modal-title" variant="h4" component="h4" textAlign={"center"} fontWeight={"bold"}>
          Are you sure you want to delete this {title ? "course" : "users"} details?
        </Typography>
        {firstName && (
          <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>
            {firstName} {lastName}
          </Typography>
        )}

        <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>
          {description ? description : email}
        </Typography>
        <Box display={"flex"} justifyContent={"center"}>
          <Button onClick={handleClose} variant="outlined" sx={{ mr: 2 }}>
            Cancel
          </Button>
          <Button variant="contained" color="error" onClick={handleDelete}>
            Delete
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
