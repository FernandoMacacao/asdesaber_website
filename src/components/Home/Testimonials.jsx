import { Card, CardContent, Rating, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Slider from "react-slick";
import "../../styles/styles.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import SectionHeader from "../SectionHeader";

const Testimonials = ({ testimonials }) => {
  const NextArrow = ({ currentSlide, slideCount, ...props }) => (
    <ArrowCircleRightIcon
      {...props}
      color="primary"
      sx={{ "&:hover": { color: "#188AB9" } }}
    />
  );

  const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
    <ArrowCircleLeftIcon
      {...props}
      color="primary"
      sx={{ "&:hover": { color: "#188AB9" } }}
    />
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          infinite: true,
          speed: 500,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <Box mt={10} className="caroussel">
      <Container maxWidth="lg">
        <SectionHeader
          title="Testemunhos"
          subtitle="O que os nossos alunos pensam sobre nós"
        />
        <Slider {...settings}>
          {testimonials.map((testimonial, id) => (
            <Box key={id} p={{ xs: 3, md: 2 }} sx={{ height: "100%" }}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  p: 2,
                  backgroundColor: "common.white",
                  height: "100%",
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ borderRadius: "50%", height: 50, width: 50 }}
                  backgroundColor="#1893c6"
                >
                  <Typography
                    variant="h6"
                    fontWeight={400}
                    color="common.white"
                  >
                    {testimonial.name.charAt(0)}
                  </Typography>
                </Box>
                <CardContent sx={{ px: 0 }}>
                  <Typography
                    variant="body1"
                    fontWeight={700}
                    color="textPrimary"
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body1" color="textPrimary">
                    {testimonial.text}
                  </Typography>
                </CardContent>
                <Rating name="read-only" value={5} readOnly sx={{ mt: 2 }} />
              </Card>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Testimonials;
