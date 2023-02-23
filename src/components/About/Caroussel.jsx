import React from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Slider from "react-slick";
import { Box } from "@mui/material";

const images = ["img1.png", "img2.png", "img3.png"];

const Caroussel = () => {
  const NextArrow = ({ currentSlide, slideCount, ...props }) => (
    <ArrowCircleRightIcon
      {...props}
      sx={{
        color: "common.white",
        "&:hover": { color: "#E6E6E6" },
      }}
    />
  );

  const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
    <ArrowCircleLeftIcon
      {...props}
      sx={{ color: "common.white", "&:hover": { color: "#E6E6E6" } }}
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
    className: "customizeArrow",
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
      <Slider {...settings}>
        {images.map((img, id) => (
          <img
            key={id}
            src={require(`../../assets/${img}`)}
            alt="Ás de Saber"
          />
        ))}
      </Slider>
    </Box>
  );
};

export default Caroussel;
