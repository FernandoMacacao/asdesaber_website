import React from "react";
import Grid from "@mui/material/Grid";
import Logo from "../assets/logo.png";
import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const pages = [
  "Início",
  "Explicações",
  "Apoio Psicopedagógico",
  "Formação",
  "Sobre Nós",
  "Contactos",
];
const pageRef = [
  "/",
  "/explicacoes",
  "/apoio",
  "/formacao",
  "/sobrenos",
  "/contactos",
];

const socialMedia = [
  ["facebook.svg", "Facebook", "https://pt-pt.facebook.com/asdesaber/"],
  ["instagram.svg", "Instagram", "https://www.instagram.com/asdesaber/"],
];

const contacts = [
  ["phone.svg", "218 963 068"],
  ["phone.svg", "969 754 763"],
  ["email.svg", "geral@asdesaber.pt"],
  ["location.svg", "Rua de Moscavide, 16B 1990-162 Lisboa"],
];

const Footer = () => {
  return (
    <Box p={5} sx={{ backgroundColor: "common.black" }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={3}>
            <Box
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent={{ xs: "center", lg: "flex-start" }}
            >
              <img src={Logo} alt="Logo Ás de Saber" width="100px" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems={{ xs: "center", lg: "flex-start" }}
              mt={{ xs: 5, md: 0 }}
            >
              <Typography
                variant="body2"
                color="common.white"
                fontWeight={700}
                mb={2}
              >
                Links
              </Typography>
              {pages.map((page, id) => (
                <Link
                  key={id}
                  to={pageRef[id]}
                  style={{ textDecoration: "none", marginBottom: "5px" }}
                >
                  <Typography variant="body2" color="common.white">
                    {page}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems={{ xs: "center", lg: "flex-start" }}
              mt={{ xs: 5, md: 0 }}
            >
              <Typography
                variant="body2"
                color="common.white"
                fontWeight={700}
                mb={2}
              >
                Redes Sociais
              </Typography>
              {socialMedia.map((sm, id) => (
                <Link
                  key={id}
                  to={sm[2]}
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "5px",
                  }}
                >
                  <img
                    src={require(`../assets/${sm[0]}`)}
                    alt={sm[1]}
                    width="20px"
                  />
                  <Typography variant="body2" color="common.white" ml={0.5}>
                    {sm[1]}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems={{ xs: "center", lg: "flex-start" }}
              mt={{ xs: 5, md: 0 }}
            >
              <Typography
                variant="body2"
                color="common.white"
                fontWeight={700}
                mb={2}
              >
                Contactos
              </Typography>
              {contacts.map((contact, id) => (
                <Box key={id} display="flex" mb="5px">
                  <img
                    src={require(`../assets/${contact[0]}`)}
                    alt={contact[1]}
                    width="20px"
                  />
                  <Typography variant="body2" color="common.white" ml={0.5}>
                    {contact[1]}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
