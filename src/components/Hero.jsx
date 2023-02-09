import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Typography,
  Container,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";

const Hero = ({
  title,
  subtitle,
  img,
  noButton,
  singleButton,
  firstButton,
  secondButton,
}) => {
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
        height: "80vh",
        mt: { md: 8, xs: 7 },
      }}
    >
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Box
          display="flex"
          height="100%"
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
              {singleButton ? (
                <Grid container spacing={2} mt={4}>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="secondary"
                      fullWidth={isFullWidth}
                    >
                      {firstButton}
                    </Button>
                  </Grid>
                </Grid>
              ) : (
                <Box
                  mt={4}
                  display="flex"
                  flexDirection={{ xs: "column", md: "row" }}
                  width="100%"
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth={isFullWidth}
                    sx={{ mb: { xs: 2, md: 0 }, mr: { xs: 0, md: 2 } }}
                  >
                    {firstButton}
                  </Button>
                  <Link to="/sobrenos" style={{ textDecoration: "none" }}>
                    <Button
                      variant="outlined"
                      color="secondary"
                      fullWidth={isFullWidth}
                    >
                      {secondButton}
                    </Button>
                  </Link>
                </Box>
              )}
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
