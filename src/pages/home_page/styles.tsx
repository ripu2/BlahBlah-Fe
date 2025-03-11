import { Box } from "@mui/material";
import styled from "@emotion/styled"; // Change this import

export const HomeContainer = styled(Box)({
  padding: "16px", // Default padding
  all: "unset", // Inherited styles ko reset karega
  display: "block", // Ensure it's visible
  color: "inherit", // Text color parent se le, na ki remove ho
});
