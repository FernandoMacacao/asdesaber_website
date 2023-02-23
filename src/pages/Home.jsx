import { Box } from "@mui/system";
import React from "react";
import Hero from "../components/Hero";
import Data from "../data/home/data.json";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardActionArea, Grid } from "@mui/material";
import LinkWithScroll from "../components/LinkWithScroll";
import InfoSection from "../components/Home/InfoSection";
import Testimonials from "../components/Home/Testimonials";
import MessageForm from "../components/MessageForm";
import Footer from "../components/Footer";
import SendMessageImg from "../assets/send_message.png";
import SectionHeader from "../components/SectionHeader";
import PhraseBanner from "../components/PhraseBanner";

const Home = () => {
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
      {/* BANNER */}
      <PhraseBanner text="18 anos de experiência ao serviço do êxito académico e profissional" />
      {/* SERVICES SECTION */}
      <Box mt={10} display="flex">
        <Container maxWidth="lg">
          <div data-aos="zoom-in">
            <SectionHeader
              title="Os nossos serviços"
              subtitle="Conheça o que temos para lhe oferecer"
            />
            <Grid container rowSpacing={{ xs: 3, md: 0 }} columnSpacing={3}>
              {Data.Cards.map((card, id) => (
                <Grid key={id} item xs={12} md={4}>
                  <Card
                    sx={{ backgroundColor: "common.white", height: "100%" }}
                  >
                    <LinkWithScroll
                      to={card.href}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <CardActionArea sx={{ height: "100%" }}>
                        <CardContent>
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                          >
                            <img
                              src={require(`../assets/${card.icon}`)}
                              alt={`Icon ${card.title}`}
                              width={50}
                            />
                            <Typography
                              variant="h6"
                              color="common.black"
                              textTransform="none"
                              textAlign="center"
                            >
                              {card.title}
                            </Typography>
                            <Typography
                              variant="body1"
                              color="common.black"
                              textAlign="center"
                            >
                              {card.text}
                            </Typography>
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </LinkWithScroll>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </Container>
      </Box>
      {/* TUTORING SECTION */}
      <InfoSection
        title={Data.Section1.title}
        subtitle={Data.Section1.subtitle}
        text={Data.Section1.text}
        img={Data.Section1.img}
        buttonWhite={Data.Section1.buttonWhite}
        href={Data.Section1.href}
        imageFirst={Data.Section1.imageFirst}
        backgroundBlue={Data.Section1.backgroundBlue}
      />
      {/* ONLINE TUTORING SECTION */}
      <InfoSection
        title={Data.Section2.title}
        subtitle={Data.Section2.subtitle}
        text={Data.Section2.text}
        img={Data.Section2.img}
        buttonWhite={Data.Section2.buttonWhite}
        href={Data.Section2.href}
        imageFirst={Data.Section2.imageFirst}
        backgroundBlue={Data.Section2.backgroundBlue}
      />
      {/* TESTIMONIALS SECTION */}
      <Testimonials testimonials={Data.Testimonials} />
      {/* FORM SECTION */}
      <Grid container spacing={0} my={10}>
        <Grid item xs={12} md={6}>
          <div data-aos="fade-right" style={{ height: "100%" }}>
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
              src={SendMessageImg}
              alt="send message"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div data-aos="fade-left" style={{ height: "100%" }}>
            <MessageForm shadow />
          </div>
        </Grid>
      </Grid>
      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Home;
