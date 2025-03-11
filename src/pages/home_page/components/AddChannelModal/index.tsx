import React, { useState } from 'react'
import { TextField, Switch, FormControlLabel } from "@mui/material";
import CustomModal from '../../../../components/CustomModal';
import {AddChannelModalProps, FormData} from './types'

const AddChannelModal= (props: AddChannelModalProps) => {
  const { open, onClose, onSubmit } = props;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    is_private: false, // Default false
    metadata: {},
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    setFormData((prev) => {
      if (name.startsWith("metadata.")) {
        const key = name.split(".")[1];
        return {
          ...prev,
          metadata: {
            ...prev.metadata,
            [key]: value,
          },
        };
      } else {
        return {
          ...prev,
          [name]: type === "checkbox" ? checked : value,
        };
      }
    });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
      <CustomModal open={open} onClose={onClose} onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Group Name *"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
          error={!formData.name}
          helperText={!formData.name ? "Name is required" : ""}
        />

        <FormControlLabel
          control={
            <Switch
              name="is_private"
              checked={formData.is_private}
              onChange={handleChange}
            />
          }
          label="Private Group"
          sx={{ color: "black" }}  // FIX
        />

        <TextField
          fullWidth
          label="Description"
          name="metadata.description"
          value={formData.metadata?.description || ""}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Rules"
          name="metadata.rules"
          value={formData.metadata?.rules || ""}
          onChange={handleChange}
          margin="normal"
        />
      </CustomModal>
  );
};

export default AddChannelModal;
