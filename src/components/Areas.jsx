import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import LinkWithScroll from "./LinkWithScroll";
import BlueArrow from "../assets/blue_arrow.svg";
import OrangeArrow from "../assets/orange_arrow.svg";
import SectionHeader from "./SectionHeader";

const Areas = ({ title, subtitle, cards, hasLink }) => {
  const [cardHover, setCardHover] = useState(-1);

  return (
    <Box backgroundColor="#1893c6" py={10}>
      <Container maxWidth="lg">
        <SectionHeader title={title} subtitle={subtitle} white />
        <Grid container spacing={3} mt={{ md: 5, xs: 2 }}>
          {cards.map((card, id) => {
            return (
              <Grid
                key={id}
                item
                xs={12}
                md={4}
                display="flex"
                justifyContent="center"
              >
                <Card
                  sx={{
                    backgroundColor: card.odd ? "common.white" : "#1893c6",
                    height: "250px",
                    width: "250px",
                  }}
                  onMouseEnter={() => {
                    setCardHover(id);
                  }}
                  onMouseLeave={() => {
                    setCardHover(-1);
                  }}
                >
                  <CardContent sx={{ height: "100%" }}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      height="100%"
                    >
                      {card.hasHover && id === cardHover ? (
                        card.hoverText.map((text, id) => (
                          <Typography
                            key={id}
                            variant="body1"
                            color={card.odd ? "textPrimary" : "common.white"}
                          >
                            <img
                              src={card.odd ? BlueArrow : OrangeArrow}
                              alt="arrow"
                            />{" "}
                            {text}
                          </Typography>
                        ))
                      ) : (
                        <>
                          <img
                            src={require(`../assets/${card.icon}`)}
                            alt={card.title}
                            height="90px"
                            width="auto"
                            style={{ marginBottom: "30px" }}
                          />
                          <Typography
                            variant="h6"
                            color={card.odd ? "secondary" : "common.white"}
                            fontWeight={700}
                            textAlign="center"
                          >
                            {card.title}
                          </Typography>
                        </>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        {hasLink ? (
          <Typography
            variant="body1"
            color="common.white"
            textAlign="center"
            mt={5}
          >
            * Para informações relativas ao Ensino Superior{" "}
            <LinkWithScroll
              to="/contactos"
              style={{ color: "#f5f5f5", fontWeight: 700 }}
            >
              contacte-nos aqui.
            </LinkWithScroll>
          </Typography>
        ) : undefined}
      </Container>
    </Box>
  );
};

export default Areas;
