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
import { Box } from "@mui/material";

const Contacts = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  const center = useMemo(
    () => ({ lat: 38.778681668006534, lng: -9.09668969386543 }),
    []
  );

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
      {/* MAPA */}
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
      <MessageForm />
      <Footer />
    </>
  );
};

export default Contacts;
