import { Box, Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import LinkWithScroll from "../components/LinkWithScroll";
import Logo from "../assets/logo.png";

const NotFound = () => {
  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <img src={Logo} alt="Logo Ás de Saber" width="120px" height="auto" />
      <Typography variant="h2" color="primary" textAlign="center" mt={5}>
        404 - Página não encontrada
      </Typography>
      <Typography variant="body1" color="common.black" mt={3}>
        Pedimos desculpa, a página que procura não existe.
      </Typography>
      <LinkWithScroll to="/" style={{ textDecoration: "none" }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            sx={{
              borderRadius: "50%",
              display: "flex",
              flexDirection: "column",
              marginTop: 5,
            }}
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
                backgroundColor: "#1893c6",
              }}
            >
              <ArrowBackIcon color="info" />
            </Box>
          </Button>
          <Typography variant="body1" color="primary">
            Voltar ao website
          </Typography>
        </Box>
      </LinkWithScroll>
    </Box>
  );
};

export default NotFound;
