import { Box, Paper } from "@mui/material";
import styled from "@emotion/styled"; // Change this import

export const LayoutContainer = styled(Box)({
  display: "flex",
  height: "100%",
  width: "100vw"
});

export const Sidebar = styled(Paper)({
  width: "25%",
  height: "100vh",
  overflowY: "auto",
  padding: "16px",
  backgroundColor: "#f5f5f5",
});

export const ContentArea = styled(Box)({
  flex: 1,
  padding: "24px",
});
