import { Box, Button } from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppButton = () => {
  const handleOnClick = () => {
    const phoneNumber = process.env.REACT_APP_WHATSAPP_PHONE_NUMBER;
    window.open(`https://wa.me/${phoneNumber}`);
  };

  return (
    <Button
      sx={{
        borderRadius: "50%",
        position: "fixed",
        zIndex: 1000,
        bottom: 20,
        right: 20,
      }}
      onClick={handleOnClick}
    >
      <Box
        width="50px"
        height="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="0px 2px 10px 0px rgba(0,0,0,0.75)"
        borderRadius="50%"
        sx={{
          background: "linear-gradient(to right bottom, #A6ED6A, #00C91A)",
        }}
      >
        <WhatsAppIcon color="info" />
      </Box>
    </Button>
  );
};

export default WhatsAppButton;
