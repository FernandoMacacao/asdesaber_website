import React from "react";
import Areas from "../components/Areas";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Data from "../data/graduation/data.json";
import Banner from "../assets/banner_graduation.png";
import DGERTLogo from "../assets/logo_dgert.png";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";

const Graduation = () => {
  const isFullWidth = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <>
      {/* HERO SECTION */}
      <Hero
        title={Data.Hero.title}
        subtitle={Data.Hero.subtitle}
        img={Data.Hero.img}
        noButton={Data.Hero.noButton}
        firstButton={Data.Hero.firstButton}
        href={Data.Hero.href}
      />
      {/* GRADUATION AREAS SECTION */}
      <Areas
        title="As Nossas Áreas De Formação Certificadas"
        subtitle="Conheça as nossas soluções para o seu desenvolvimento"
        cards={Data.Cards}
        hasLink={false}
      />
      {/* BANNER */}
      <Box
        sx={{
          backgroundImage: `url(${Banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maxWidth: "100vw",
          minHeight: "30vh",
        }}
      >
        <Container maxWidth="lg" sx={{ height: "100%" }}>
          <Box
            display="flex"
            minHeight="30vh"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
            py={2}
          >
            <Typography variant="h5" color="primary" textAlign="center">
              Quer tirar um curso de formação?
            </Typography>
            <img
              src={DGERTLogo}
              alt="DGERT"
              height="80px"
              style={{ marginTop: "10px" }}
            />
            <Grid
              display="flex"
              justifyContent="center"
              flexDirection={{ xs: "column", md: "row" }}
              container
              spacing={2}
              mt={1}
            >
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth={isFullWidth}
                >
                  Inscreva-se!
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Graduation;
