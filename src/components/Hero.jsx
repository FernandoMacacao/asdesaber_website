import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Typography,
  Container,
  useMediaQuery,
} from "@mui/material";
import LinkWithScroll from "./LinkWithScroll";

const Hero = ({ title, subtitle, img, noButton, firstButton, href }) => {
  const [heroImage, setHeroImage] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      const image = await import(`../assets/${img}`);
      setHeroImage(image.default);
    };

    loadImage();
  }, [img]);

  const isFullWidth = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        backgroundImage: `url(${heroImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        maxWidth: "100vw",
        minHeight: "100vh",
        mt: { md: 8, xs: 7 },
      }}
    >
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Box
          display="flex"
          minHeight="100vh"
          flexDirection="column"
          justifyContent="center"
          alignItems={{ xs: "center", md: "flex-start" }}
          width="100%"
        >
          <Typography
            variant="h2"
            color="common.white"
            width={{ xs: "100%", md: "57%" }}
            textAlign={{ xs: "center", md: "left" }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            color="common.white"
            mt={2}
            width={{ xs: "100%", md: "50%" }}
            textAlign={{ xs: "center", md: "left" }}
          >
            {subtitle}
          </Typography>
          {noButton ? undefined : (
            <>
              <Grid container spacing={2} mt={4}>
                <Grid item xs={12}>
                  <LinkWithScroll to={href} style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      fullWidth={isFullWidth}
                    >
                      {firstButton}
                    </Button>
                  </LinkWithScroll>
                </Grid>
              </Grid>
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
