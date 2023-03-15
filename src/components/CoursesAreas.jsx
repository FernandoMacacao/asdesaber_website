import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

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
          <Box
            key={index}
            backgroundColor={index % 2 !== 0 ? "#f5f5f5" : "#1893c6"}
            py={5}
          >
            <Container maxWidth="md">
              <Grid
                container
                display="flex"
                spacing={{ xs: 3, md: 0 }}
                justifyContent="center"
              >
                <Grid
                  item
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  xs={12}
                  md={2}
                >
                  <img
                    src={require(`../assets/${course.icon}`)}
                    alt={course.title}
                    height="80px"
                    width="80px"
                  />
                </Grid>
                <Grid
                  item
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems={{ xs: "center", md: "flex-start" }}
                  xs={12}
                  md={5}
                >
                  <Typography
                    variant="h6"
                    color="textSecondary"
                    mb={1}
                    sx={{
                      textShadow:
                        index % 2 === 0 ? "0px 0px 2px #3D3C3C" : undefined,
                    }}
                    textAlign={{ xs: "center", md: "left" }}
                  >
                    {course.title}
                  </Typography>
                  {course.hasAnualCourse ? (
                    <Link
                      to={
                        course.pdfAnual === ""
                          ? "/"
                          : require(`../assets/${course.pdfAnual}`)
                      }
                      style={{
                        textDecoration: "none",
                        display: "flex",
                        marginBottom: "10px",
                      }}
                      target={course.pdfAnual === "" ? "" : "_blank"}
                    >
                      <Typography
                        variant="body1"
                        color={
                          index % 2 !== 0 ? "common.black" : "common.white"
                        }
                        sx={{
                          "&:hover": {
                            color: index % 2 !== 0 ? "#1893c6" : "common.black",
                          },
                        }}
                      >
                        Curso Anual
                      </Typography>
                      <ArrowForwardIcon
                        color={index % 2 === 0 ? "info" : "success"}
                        sx={{
                          "&:hover": {
                            color: index % 2 !== 0 ? "#1893c6" : "common.black",
                          },
                        }}
                      />
                    </Link>
                  ) : undefined}
                  <Link
                    to={
                      course.pdfLong === ""
                        ? "/"
                        : require(`../assets/${course.pdfLong}`)
                    }
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      marginBottom: "10px",
                    }}
                    target={course.pdfLong === "" ? "" : "_blank"}
                  >
                    <Typography
                      variant="body1"
                      color={index % 2 !== 0 ? "common.black" : "common.white"}
                      sx={{
                        "&:hover": {
                          color: index % 2 !== 0 ? "#1893c6" : "common.black",
                        },
                      }}
                    >
                      Curso Intensivo - Longa Duração (48h)
                    </Typography>
                    <ArrowForwardIcon
                      color={index % 2 === 0 ? "info" : "success"}
                      sx={{
                        "&:hover": {
                          color: index % 2 !== 0 ? "#1893c6" : "common.black",
                        },
                      }}
                    />
                  </Link>
                  <Link
                    to={
                      course.pdfShort === ""
                        ? "/"
                        : require(`../assets/${course.pdfShort}`)
                    }
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                    }}
                    target={course.pdfShort === "" ? "" : "_blank"}
                  >
                    <Typography
                      variant="body1"
                      color={index % 2 !== 0 ? "common.black" : "common.white"}
                      sx={{
                        "&:hover": {
                          color: index % 2 !== 0 ? "#1893c6" : "common.black",
                        },
                      }}
                    >
                      Curso Intensivo - Curta Duração (24h)
                    </Typography>
                    <ArrowForwardIcon
                      color={index % 2 === 0 ? "info" : "success"}
                      sx={{
                        "&:hover": {
                          color: index % 2 !== 0 ? "#1893c6" : "common.black",
                        },
                      }}
                    />
                  </Link>
                </Grid>
              </Grid>
            </Container>
          </Box>
        );
      })}
    </>
  );
};

export default Courses;
