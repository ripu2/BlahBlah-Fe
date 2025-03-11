import React, { ReactNode } from "react";
import { Modal, Box, Button } from "@mui/material";

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
  children: ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ open, onClose, onSubmit, children }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          boxShadow: 24,
          p: 3,
          borderRadius: 2,
          minWidth: 300,
        }}
      >
        {children}

        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button onClick={onClose} sx={{ mr: 1 }}>
            Cancel
          </Button>
          <Button variant="contained" onClick={onSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
