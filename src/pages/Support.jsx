import React from "react";
import Hero from "../components/Hero";
import CardSection from "../components/CardSection";
import Data from "../data/support/data.json";
import Banner from "../assets/banner_support.png";
import LogoConceitoPhi from "../assets/logo_conceitoPhi.webp";
import LogoTelepsia from "../assets/logo_telepsia.jpg";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useMediaQuery,
} from "@mui/material";
import Footer from "../components/Footer";
import OvPDF from "../assets/pdf_ov.pdf";
import { Link } from "react-router-dom";

const Support = () => {
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
      {/* PLANS SECTION */}
      <CardSection
        title="Psicologia em parceria"
        subtitle="A relevância e contribuição destas áreas para o sucesso pessoal é crucial."
        plans={Data.Plans}
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
          mt: 10,
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
            <Typography variant="h5" color="common.white" textAlign="center">
              Consulte os nossos programas!
            </Typography>
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
                  Psicologia e Psicomotricidade
                </Button>
              </Grid>
              <Grid item>
                <Link
                  to={OvPDF}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth={isFullWidth}
                  >
                    Orientação Vocacional
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      {/* PARTNERS SECTION */}
      <Box my={10} display="flex">
        <Container maxWidth="lg">
          <Box>
            <Typography
              variant="h5"
              color="textPrimary"
              textAlign="center"
              mb={{ xs: 2, md: 6 }}
            >
              Ao nosso lado, os melhores. Conte com as nossas parcerias para
              satisfazer as suas necessidades.
            </Typography>
            <Container maxWidth="md">
              <Box
                display="flex"
                flexDirection="row"
                justifyContent={{ xs: "center", md: "space-between" }}
              >
                <Link to="https://www.inlogos.pt/conceito-phi" target="_blank">
                  <img
                    style={{ marginInline: "20px" }}
                    src={LogoConceitoPhi}
                    alt="Conceito Phi"
                    height="80px"
                  />
                </Link>
                <Link to="https://telepsia.com/" target="_blank">
                  <img
                    style={{ marginInline: "20px" }}
                    src={LogoTelepsia}
                    alt="Telépsia"
                    height="80px"
                  />
                </Link>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Support;
