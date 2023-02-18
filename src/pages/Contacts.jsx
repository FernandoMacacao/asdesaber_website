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
  const center = useMemo(() => ({ lat: 38.77871, lng: -9.09625 }), []);

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
            <>
              <GoogleMap
                zoom={18}
                center={center}
                mapContainerClassName="map-container"
              >
                <MarkerF position={center} />
              </GoogleMap>
            </>
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
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
            py={2}
          >
            <Grid
              container
              columnSpacing={3}
              rowSpacing={{ xs: 3, md: 0 }}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
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
                  >
                    <img
                      src={require(`../assets/${contact.icon}`)}
                      alt={contact.title}
                      height="50px"
                      style={{ marginBottom: 10 }}
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
                        <Typography
                          variant="body1"
                          color="textPrimary"
                          textAlign="center"
                        >
                          {contact.text[0]}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="textPrimary"
                          textAlign="center"
                        >
                          {contact.text[1]}
                        </Typography>
                      </Box>
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
