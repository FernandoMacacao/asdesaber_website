import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const PhraseBanner = ({ text }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="10vh"
      backgroundColor="#1893C6"
    >
      <Typography variant="h5" color="common.white" textAlign="center">
        {text}
      </Typography>
      <Box
        mt={1}
        height={isMobile ? "2px" : "3px"}
        borderRadius="5em"
        backgroundColor="common.white"
        width={isMobile ? "50%" : "20%"}
      />
    </Box>
  );
};

export default PhraseBanner;
