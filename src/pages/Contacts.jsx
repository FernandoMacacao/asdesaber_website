import React from "react";
import Hero from "../components/Hero";
import MessageForm from "../components/MessageForm";
import Footer from "../components/Footer";
import Data from "../data/contacts/data.json";
import { useMemo } from "react";
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import "../styles/styles.css";
import { Box, Grid } from "@mui/material";
import Banner from "../assets/banner_contacts.png";

const Contacts = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const center = useMemo(
    () => ({ lat: 38.77868168090565, lng: -9.096689988635774 }),
    []
  );

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
          {!isLoaded ? (
            <Typography variant="body1" color="textPrimary">
              Loading...
            </Typography>
          ) : (
            <div data-aos="zoom-in">
              <GoogleMap
                zoom={19}
                center={center}
                mapContainerClassName="map-container"
              >
                <MarkerF position={center} />
              </GoogleMap>
            </div>
          )}
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
