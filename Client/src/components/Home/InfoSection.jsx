import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button, ImageListItem, Box } from "@mui/material";
import LinkWithScroll from "../LinkWithScroll";

const InfoSection = ({
  title,
  subtitle,
  text,
  img,
  buttonWhite,
  href,
  imageFirst,
  backgroundBlue,
}) => {
  return (
    <Box
      mt={backgroundBlue ? 10 : 0}
      mb={backgroundBlue ? 0 : 10}
      py={3}
      pb={backgroundBlue ? undefined : 0}
      backgroundColor={backgroundBlue ? "#1893c6" : undefined}
      display="flex"
      sx={{ overflowX: "hidden" }}
    >
      <Container maxWidth="md">
        <Grid
          display="grid"
          container
          spacing={0}
          gridTemplateColumns={{
            xs: "1fr",
            md: imageFirst ? "1fr 1fr" : "1fr 1fr",
          }}
          gridTemplateAreas={
            imageFirst
              ? { xs: '"col1" "col2"', md: '"col1 col2"' }
              : { xs: '"col1" "col2"', md: '"col2 col1"' }
          }
        >
          <Grid item gridArea="col1">
            <div data-aos={imageFirst ? "fade-right" : "fade-left"}>
              <Box
                display="flex"
                sx={{
                  justifyContent: {
                    xs: "center",
                    md: imageFirst ? "left" : "right",
                  },
                }}
              >
                <ImageListItem sx={{ width: { xs: 200, md: 350 } }}>
                  <img src={require(`../../assets/${img}`)} alt={title} />
                </ImageListItem>
              </Box>
            </div>
          </Grid>
          <Grid item gridArea="col2">
            <Box
              display="flex"
              flexDirection="column"
              height="100%"
              justifyContent="center"
            >
              <div data-aos={imageFirst ? "fade-left" : "fade-right"}>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  sx={{
                    textAlign: { xs: "center", md: "left" },
                    mt: { xs: 2, md: 0 },
                    textShadow: backgroundBlue
                      ? "0px 0px 2px #3D3C3C"
                      : undefined,
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="h5"
                  color={backgroundBlue ? "common.white" : "common.black"}
                  mt={1}
                  mb={2}
                  sx={{ textAlign: { xs: "center", md: "left" } }}
                >
                  {subtitle}
                </Typography>
                <Typography
                  variant="body1"
                  color={backgroundBlue ? "common.white" : "common.black"}
                  sx={{ textAlign: { xs: "center", md: "left" } }}
                >
                  {text}
                </Typography>

                <LinkWithScroll
                  to={href}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  <Button
                    variant="contained"
                    color={buttonWhite ? "info" : "secondary"}
                    sx={{ mt: 3, width: { md: "fit-content", xs: "100%" } }}
                  >
                    Saiba Mais
                  </Button>
                </LinkWithScroll>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InfoSection;
