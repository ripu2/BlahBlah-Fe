import React from "react";
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from "@mui/material";

interface ChatCardProps {
  title: string;
  pfp: string;
  createdAt: string;
}

const CommunicationCard: React.FC<ChatCardProps> = ({ title, pfp, createdAt }) => {

  const formatDate = (isoString: string): string => {
    const date = new Date(isoString);
    return date.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <ListItem sx={{ borderBottom: "1px solid #ddd", py: 1 }}>
      <ListItemAvatar>
        <Avatar src={pfp} alt={title} />
      </ListItemAvatar>
      <ListItemText
        primary={<Typography variant="h6">{title}</Typography>}
        secondary={<Typography variant="body2" color="textSecondary">{formatDate(createdAt)}</Typography>}
      />
    </ListItem>
  );
};

export default CommunicationCard;
