import React from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Slider from "react-slick";
import { Box, Container } from "@mui/material";
import "./Caroussel.css";

const images = ["img1.png", "img2.png", "img3.png"];

const Caroussel = () => {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <Box my={10}>
      <Container maxWidth="lg">
        <Slider {...settings}>
          {images.map((img, id) => (
            <img
              key={id}
              src={require(`../../assets/${img}`)}
              alt="Ás de Saber"
            />
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Caroussel;
