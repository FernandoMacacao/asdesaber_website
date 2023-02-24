import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  Grid,
  CardMedia,
  Card,
  CardContent,
} from "@mui/material";
import React from "react";
import Hero from "../components/Hero";
import Data from "../data/about/data.json";
import Chronogram from "../assets/chronogram.png";
import ChronogramMobile from "../assets/chronogram_mobile.png";
import SpeechMark from "../assets/speech_mark.png";
import CardSection from "../components/CardSection";
import Caroussel from "../components/About/Caroussel";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import PhraseBanner from "../components/PhraseBanner";

const About = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <>
      {/* HERO SECTION */}
      <Hero
        title={Data.Hero.title}
        subtitle={Data.Hero.subtitle}
        img={Data.Hero.img}
        noButton={Data.Hero.noButton}
        singleButton={Data.Hero.singleButton}
        firstButton={Data.Hero.firstButton}
        secondButton={Data.Hero.secondButton}
      />
      {/* BANNER */}
      <PhraseBanner text="Uma equipa formada por professores certificados" />
      {/* HISTORY SECTION */}
      <Box mt={10}>
        <Container maxWidth="lg">
          <SectionHeader
            title="A nossa História"
            subtitle="Descubra a nossa evolução ao longo dos anos"
          />
          <Box display="flex" justifyContent="center">
            {isMobile ? (
              <img src={ChronogramMobile} alt="cronograma" width="250px" />
            ) : (
              <img src={Chronogram} alt="cronograma" width="80%" />
            )}
          </Box>
        </Container>
      </Box>
      {/* TEAM SECTION */}
      <Box mt={10} py={10} backgroundColor="#1893c6">
        <Container maxWidth="lg">
          <SectionHeader
            title="QUEM SOMOS"
            subtitle="Conheça quem faz acontecer"
            white
          />
          <Grid display="flex" container justifyContent="center" spacing={3}>
            {Data.Members.map((member, id) => (
              <Grid key={id} item xs={12} md={3}>
                <Card sx={{ backgroundColor: "common.white", height: "100%" }}>
                  <CardMedia
                    component="img"
                    image={require(`../assets/${member.img}`)}
                    alt={member.name}
                    height="auto"
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      textTransform="none"
                      color="primary"
                      textAlign="center"
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="common.black"
                      textAlign="center"
                    >
                      {member.job}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/* MISSON/VALUES/VISION SECTION */}
      <Box py={10} backgroundColor="#E6E6E6">
        <Container maxWidth="lg">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            mb={{ xs: -8, md: -4 }}
          >
            <img
              src={SpeechMark}
              alt="speech mark"
              height="30px"
              width="30px"
            />
            <Typography
              variant="body1"
              color="common.black"
              textAlign="center"
              sx={{
                "&::after": {
                  content: "''",
                  display: "block",
                  position: "relative",
                  bottom: "-10px",
                  width: isMobile ? "50%" : "20%",
                  height: "3px",
                  backgroundColor: "#1893C6",
                  borderRadius: "5em",
                  left: "50%",
                  transform: "translateX(-50%)",
                },
              }}
            >
              Como profissionais com experiência na docência, sabemos que a
              atenção focada em particular nas necessidades de cada aluno
              potencia as suas possibilidades de sucesso. Sabemos também, por
              experiência própria, como a formação pessoal contínua ao longo da
              vida permite rasgar novos horizontes no percurso pessoal e
              profissional de cada indivíduo.
            </Typography>
          </Box>
          <CardSection title="" subtitle="" plans={Data.Plans} />
        </Container>
      </Box>
      {/* IMAGES CAROUSSELL SECTION */}
      <Caroussel />
      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default About;
