import React from "react";
import Hero from "../components/Hero";
import CardSection from "../components/CardSection";
import Footer from "../components/Footer";
import Data from "../data/tutoring/data.json";
import Banner from "../assets/banner_tutoring.png";
import { Box, Container, Typography } from "@mui/material";
import Areas from "../components/Areas";
import Simulator from "../components/Tutoring/Simulator";
import ESADLogo from "../assets/logo_ESAD.png";

const Tutoring = () => {
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
        title="Os Nossos planos"
        subtitle="Escolha o plano ideal para o ajudar a alcançar os seus objetivos académicos"
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
            <img src={ESADLogo} alt="logo ESAD" />
            <Typography
              variant="h6"
              color="textSecondary"
              textAlign="center"
              mt={2}
            >
              Não perca esta oportunidade
            </Typography>
            <Typography variant="h5" color="common.black" textAlign="center">
              Aproveite 10% de Desconto nas Explicações Online!
            </Typography>
            <Typography
              color="common.black"
              textAlign="center"
              mt={3}
              fontSize="0.875rem"
            >
              * Válido apenas para alunos da Escola Secundária António Damásio
            </Typography>
          </Box>
        </Container>
      </Box>
      {/* STUDY AREAS SECTION */}
      <Areas
        title="As nossas áreas de estudo"
        subtitle="Conheça as nossas amplas opções de ensino"
        cards={Data.Cards}
        hasLink={true}
      />
      {/* PRICE SIMULATOR */}
      <Simulator />
      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Tutoring;
