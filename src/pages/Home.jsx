import { Box } from "@mui/system";
import React from "react";
import Hero from "../components/Hero";
import Data from "../data/home/data.json";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardActionArea, Grid } from "@mui/material";
import LinkWithScroll from "../components/LinkWithScroll";
import InfoSection from "../components/Home/InfoSection";
import Testimonials from "../components/Home/Testimonials";
import MessageForm from "../components/MessageForm";
import Footer from "../components/Footer";
import SendMessageImg from "../assets/send_message.png";
import SectionHeader from "../components/SectionHeader";
import PhraseBanner from "../components/PhraseBanner";

const cards = [
  [
    "tutoring.svg",
    "Explicações",
    "As nossas explicações são desenhadas e adaptadas a cada aluno dentro das várias modalidades que oferecemos.",
    "/explicacoes",
  ],
  [
    "support.svg",
    "Apoio Psicopedagógico",
    "Temos parcerias com equipas de psicólogos que trabalham na área do autoconhecimento e da aprendizagem.",
    "/apoio",
  ],
  [
    "graduation.svg",
    "Formação",
    "Somos uma empresa certificada na área da formação.",
    "/formacao",
  ],
];

const testimonials = [
  [
    "Dina Alexandre",
    "“Saliento com grande satisfação a qualidade e competências dos professores, preocupados em entender as necessidades dos alunos e adequar os métodos de estudo, com visibilidade nos resultados alcançados. Recomendo a quem necessite de apoio.“",
  ],
  [
    "Ricardo Branco",
    "“Tem muito bons professores, é limpinho e muito bom para aprender; além de me melhorar as notas fiz muitos amigos. se também queres amigos devias vir experimentar! Não te vais arrepender! Contamos contigo e boas explicações!”",
  ],
  [
    "Bernardo Nunes",
    "“Centro de explicações ótimo. Toda gente ali é super simpática, sim toda a gente. Os professores são ótimos. A staff é maravilhosa e super atenciosa. E sim eles realmente querem saber sobre vocês e como vão tanto em termos académicos como pessoais...”",
  ],
  [
    "Lilibeth Abrantes",
    "“Tem muito bons professores, é limpinho e muito bom para aprender; além de me melhorar as notas fiz muitos amigos. se também queres amigos devias vir experimentar! Não te vais arrepender! Contamos contigo e boas explicações!”",
  ],
  [
    "Marta Dourado",
    "“Centro de estudo fantástico. Pessoas maravilhosas que fazem tudo para ajudar o aluno da melhor forma possível. Recomendo muito.”",
  ],
];

const Home = () => {
  return (
    <>
      <Hero
        title={Data.Hero.title}
        subtitle={Data.Hero.subtitle}
        img={Data.Hero.img}
        noButton={Data.Hero.noButton}
        singleButton={Data.Hero.singleButton}
        firstButton={Data.Hero.firstButton}
        secondButton={Data.Hero.secondButton}
      />
      <PhraseBanner text="18 anos de experiência ao serviço do êxito académico e profissional" />
      <Box mt={10} display="flex">
        <Container maxWidth="lg">
          <div data-aos="zoom-in">
            <SectionHeader
              title="Os nossos serviços"
              subtitle="Conheça o que temos para lhe oferecer"
            />
            <Grid container rowSpacing={{ xs: 3, md: 0 }} columnSpacing={3}>
              {cards.map((card, id) => (
                <Grid key={id} item xs={12} md={4}>
                  <Card
                    sx={{ backgroundColor: "common.white", height: "100%" }}
                  >
                    <LinkWithScroll
                      to={card[3]}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <CardActionArea sx={{ height: "100%" }}>
                        <CardContent>
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                          >
                            <img
                              src={require(`../assets/${card[0]}`)}
                              alt={`Icon ${card[1]}`}
                              width={50}
                            />
                            <Typography
                              variant="h6"
                              color="common.black"
                              textTransform="none"
                              textAlign="center"
                            >
                              {card[1]}
                            </Typography>
                            <Typography
                              variant="body1"
                              color="common.black"
                              textAlign="center"
                            >
                              {card[2]}
                            </Typography>
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </LinkWithScroll>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </Container>
      </Box>
      <InfoSection
        title={Data.Section1.title}
        subtitle={Data.Section1.subtitle}
        text={Data.Section1.text}
        img={Data.Section1.img}
        buttonWhite={Data.Section1.buttonWhite}
        href={Data.Section1.href}
        imageFirst={Data.Section1.imageFirst}
        backgroundBlue={Data.Section1.backgroundBlue}
      />
      <InfoSection
        title={Data.Section2.title}
        subtitle={Data.Section2.subtitle}
        text={Data.Section2.text}
        img={Data.Section2.img}
        buttonWhite={Data.Section2.buttonWhite}
        href={Data.Section2.href}
        imageFirst={Data.Section2.imageFirst}
        backgroundBlue={Data.Section2.backgroundBlue}
      />
      <Testimonials testimonials={testimonials} />
      <Grid container spacing={0} my={10}>
        <Grid item xs={12} md={6}>
          <div data-aos="fade-right" style={{ height: "100%" }}>
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
              src={SendMessageImg}
              alt="send message"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div data-aos="fade-left" style={{ height: "100%" }}>
            <MessageForm shadow />
          </div>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Home;
