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

const Support = () => {
  const isFullWidth = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <>
      <Hero
        title={Data.Hero.title}
        subtitle={Data.Hero.subtitle}
        img={Data.Hero.img}
        noButton={Data.Hero.noButton}
        singleButton={Data.Hero.singleButton}
        firstButton={Data.Hero.firstButton}
        secondButton={Data.Hero.secondButton}
      />
      <CardSection
        title="Psicologia em parceria"
        subtitle="A relevância e contribuição destas áreas para o sucesso pessoal é crucial."
        plans={Data.Plans}
      />
      <Box
        sx={{
          backgroundImage: `url(${Banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maxWidth: "100vw",
          height: "30vh",
          mt: 10,
        }}
      >
        <Container maxWidth="lg" sx={{ height: "100%" }}>
          <Box
            display="flex"
            height="100%"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
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
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth={isFullWidth}
                >
                  Orientação Vocacional
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
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
                justifyContent="space-between"
              >
                <img
                  style={{ marginInline: "20px" }}
                  src={LogoConceitoPhi}
                  alt="Conceito Phi"
                  height="80px"
                />
                <img
                  style={{ marginInline: "20px" }}
                  src={LogoTelepsia}
                  alt="Telépsia"
                  height="80px"
                />
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Support;
