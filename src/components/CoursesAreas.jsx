import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LinkWithScroll from "./LinkWithScroll";

const Courses = ({ title, subtitle, courses }) => {
  return (
    <>
      <Box my={10}>
        <Typography variant="h6" color="textSecondary" textAlign="center">
          {title}
        </Typography>
        <Typography
          variant="h5"
          textAlign="center"
          sx={{
            "&::after": {
              content: "''",
              display: "block",
              position: "relative",
              bottom: "-10px",
              width: "10%",
              height: "3px",
              backgroundColor: "#fe860c",
              borderRadius: "5em",
              left: "50%",
              transform: "translateX(-50%)",
            },
          }}
        >
          {subtitle}
        </Typography>
      </Box>
      {courses.map((course, index) => {
        return (
          <Box backgroundColor={index % 2 !== 0 ? "#f5f5f5" : "#1893c6"} py={5}>
            <Container
              maxWidth="lg"
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box display="flex" flexDirection="row" alignItems="center">
                <img
                  src={require(`../assets/${course.icon}`)}
                  alt={course.title}
                  style={{
                    marginRight: 30,
                  }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    color="textSecondary"
                    mb={1}
                    sx={{
                      textShadow:
                        index % 2 === 0 ? "0px 0px 2px #3D3C3C" : undefined,
                    }}
                  >
                    {course.title}
                  </Typography>
                  {course.hasAnualCourse ? (
                    <LinkWithScroll
                      to="/"
                      style={{
                        textDecoration: "none",
                        display: "flex",
                        marginBottom: "10px",
                      }}
                    >
                      <Typography
                        variant="body1"
                        color={
                          index % 2 !== 0 ? "common.black" : "common.white"
                        }
                      >
                        Curso Anual
                      </Typography>
                      <ArrowForwardIcon
                        color={index % 2 === 0 ? "info" : "success"}
                      />
                    </LinkWithScroll>
                  ) : undefined}
                  <LinkWithScroll
                    to="/"
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      marginBottom: "10px",
                    }}
                  >
                    <Typography
                      variant="body1"
                      color={index % 2 !== 0 ? "common.black" : "common.white"}
                    >
                      Curso Intensivo - Longa Duração (48h)
                    </Typography>
                    <ArrowForwardIcon
                      color={index % 2 === 0 ? "info" : "success"}
                    />
                  </LinkWithScroll>
                  <LinkWithScroll
                    to="/"
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body1"
                      color={index % 2 !== 0 ? "common.black" : "common.white"}
                    >
                      Curso Intensivo - Longa Duração (24h)
                    </Typography>
                    <ArrowForwardIcon
                      color={index % 2 === 0 ? "info" : "success"}
                    />
                  </LinkWithScroll>
                </Box>
              </Box>
            </Container>
          </Box>
        );
      })}
    </>
  );
};

export default Courses;
