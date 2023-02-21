import { Typography, Grid, Card, CardHeader, CardContent } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import CheckIcon from "../assets/check_icon.svg";
import XIcon from "../assets/x_icon.svg";
import SectionHeader from "./SectionHeader";
import LinkWithScroll from "./LinkWithScroll";

const CardSection = ({ title, subtitle, plans }) => {
  return (
    <Box mt={10} display="flex">
      <Container maxWidth="lg">
        <div data-aos="zoom-in">
          <SectionHeader title={title} subtitle={subtitle} />
          <Grid
            justifyContent="center"
            container
            spacing={3}
            mt={{ md: 5, xs: 2 }}
          >
            {plans.map((plan, id) => (
              <Grid key={id} item xs={12} md={4}>
                <Card sx={{ backgroundColor: "#188AB9", height: "100%" }}>
                  <CardHeader
                    titleTypographyProps={{
                      variant: "h6",
                      textTransform: "none",
                    }}
                    title={plan.title}
                    sx={{
                      textAlign: "center",
                      backgroundColor: "#1893c6",
                      boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.75)",
                      color: "common.white",
                    }}
                  />
                  <CardContent>
                    <Box
                      display="flex"
                      alignItems="center"
                      flexDirection="column"
                    >
                      {plan.hasSubtitle ? (
                        <Typography
                          variant="h6"
                          textTransform="none"
                          color="common.white"
                          mb={2}
                        >
                          {plan.subtitle}
                        </Typography>
                      ) : undefined}
                      <img
                        src={require(`../assets/${plan.icon}`)}
                        alt={plan.title}
                        style={{ marginBottom: "20px" }}
                      />
                      {plan.hasText ? (
                        <Typography
                          variant="body1"
                          color="common.white"
                          textAlign="center"
                          style={{ marginBottom: "20px" }}
                        >
                          {plan.hasLinkText ? (
                            <LinkWithScroll
                              to={plan.href}
                              style={{ color: "#f5f5f5", fontWeight: "bold" }}
                            >
                              {plan.linkText}{" "}
                            </LinkWithScroll>
                          ) : undefined}
                          {plan.text}
                        </Typography>
                      ) : undefined}

                      {plan.hasChecks
                        ? plan.checks.map((check, id) => {
                            return (
                              <Box key={id} display="flex" width="100%">
                                <img src={CheckIcon} alt="check icon" />
                                <Typography
                                  variant="body1"
                                  color="common.white"
                                  ml={1}
                                >
                                  {check}
                                </Typography>
                              </Box>
                            );
                          })
                        : undefined}
                      {plan.hasX
                        ? plan.x.map((x, id) => {
                            return (
                              <Box key={id} display="flex" width="100%">
                                <img src={XIcon} alt="check icon" />
                                <Typography
                                  variant="body1"
                                  color="common.white"
                                  ml={1}
                                >
                                  {x}
                                </Typography>
                              </Box>
                            );
                          })
                        : undefined}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </Box>
  );
};

export default CardSection;
