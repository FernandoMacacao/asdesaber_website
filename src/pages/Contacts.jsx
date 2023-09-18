/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Hero from "../components/Hero";
import MessageForm from "../components/MessageForm";
import Footer from "../components/Footer";
import Data from "../data/contacts/data.json";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import "../styles/styles.css";
import { Box, Grid } from "@mui/material";
import Banner from "../assets/banner_contacts.png";

const Contacts = () => {
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
      {/* MAP SECTION */}
      <Box mt={10} display="flex">
        <Container maxWidth="lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12441.385997457266!2d-9.0966952!3d38.7786903!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1931f332022e3b%3A0xc965843d7760e7fc!2zw4FzIERlIFNhYmVyIC0gRXhwbGljYcOnw7VlcyBlIEZvcm1hw6fDo28gTGRhIC0gRXhwbGljYcOnw7VlcyBPbmxpbmUgLQ!5e0!3m2!1spt-PT!2spt!4v1695048413899!5m2!1spt-PT!2spt"
            width={"100%"}
            height={"500px"}
            style={{ border: 0 }}
            allowfullscreen=""
            referrerpolicy="no-referrer-when-downgrade"
          />
        </Container>
      </Box>
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
            height="100%"
            width="100%"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            py={2}
          >
            <Grid
              container
              columnSpacing={3}
              rowSpacing={{ xs: 3, md: 0 }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              minHeight="30vh"
            >
              {Data.Contacts.map((contact) => {
                return (
                  <Grid
                    key={contact.title}
                    display="flex"
                    flexDirection="column"
                    item
                    xs={6}
                    md={3}
                    minHeight="125px"
                  >
                    <img
                      src={require(`../assets/${contact.icon}`)}
                      alt={contact.title}
                      height="50px"
                      style={{ marginBottom: 5 }}
                    />
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      fontWeight={700}
                      textAlign="center"
                    >
                      {contact.title}
                    </Typography>
                    {contact.isArray ? (
                      <Box display="flex" flexDirection="column">
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexDirection="column"
                        >
                          <a
                            href={
                              contact.phone
                                ? `tel:+351${contact.text[0]}`
                                : contact.href[0]
                            }
                            style={{
                              textDecoration: "none",
                            }}
                            rel={contact.phone ? "" : "noreferrer"}
                            target={contact.phone ? "" : "_blank"}
                          >
                            <Typography
                              variant="body1"
                              color="textPrimary"
                              textAlign="center"
                            >
                              {contact.text[0]}
                            </Typography>
                          </a>
                          <a
                            href={
                              contact.phone
                                ? `tel:+351${contact.text[1]}`
                                : contact.href[1]
                            }
                            style={{
                              textDecoration: "none",
                            }}
                            rel={contact.phone ? "" : "noreferrer"}
                            target={contact.phone ? "" : "_blank"}
                          >
                            <Typography
                              variant="body1"
                              color="textPrimary"
                              textAlign="center"
                            >
                              {contact.text[1]}
                            </Typography>
                          </a>
                        </Box>
                      </Box>
                    ) : contact.email ? (
                      <a
                        href={`mailto:${contact.text}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          variant="body1"
                          color="textPrimary"
                          textAlign="center"
                        >
                          {contact.text}
                        </Typography>
                      </a>
                    ) : (
                      <Typography
                        variant="body1"
                        color="textPrimary"
                        textAlign="center"
                      >
                        {contact.text}
                      </Typography>
                    )}
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Box>
      {/* MESSAGE FORM SECTION */}
      <MessageForm />
      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Contacts;
