import { Box } from '@mui/system'
import React from 'react'
import Hero from "../components/Hero"
import StatsBanner from '../components/StatsBanner'
import Data from '../data/home/data.json'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Card, CardContent, CardActionArea, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import InfoSection from '../components/Home/InfoSection'
import Testimonials from '../components/Home/Testimonials'


const cards = [
  [
    'tutoring.svg', 
    'Explicações',
    'Alcance o sucesso com as nossas explicações! Esclareça as suas dúvidas e aprofunde os seus conhecimentos.',
    '/explicacoes'
  ],
  [
    'support.svg', 
    'Apoio Psicopedagógico',
    'Transforme o sucesso em realidade com o nosso apoio! Explore o seu potencial, supere obstáculos e conquiste felicidade.',
    '/apoio'
  ],
  [ 
    'graduation.svg', 
    'Formação',
    'Investir em formação é vital para o sucesso numa sociedade competitiva. Aproveite as nossas oportunidades para melhorar as suas habilidades.',
    '/formacao'
  ]
]

const testimonials = [
  [
    'Dina Alexandre',
    '“Saliento com grande satisfação a qualidade e competências dos professores, preocupados em entender as necessidades dos alunos e adequar os métodos de estudo, com visibilidade nos resultados alcançados. Recomendo a quem necessite de apoio.“',
  ],
  [
    'Ricardo Branco',
    '“Tem muito bons professores, é limpinho e muito bom para aprender; além de me melhorar as notas fiz muitos amigos. se também queres amigos devias vir experimentar! Não te vais arrepender! Contamos contigo e boas explicações!”',
  ],
  [
    'Bernardo Nunes',
    '“Centro de explicações ótimo. Toda gente ali é super simpática, sim toda a gente. Os professores são ótimos. A staff é maravilhosa e super atenciosa. E sim eles realmente querem saber sobre vocês e como vão tanto em termos académicos como pessoais...”',
  ],
  [
    'Lilibeth Abrantes',
    '“Tem muito bons professores, é limpinho e muito bom para aprender; além de me melhorar as notas fiz muitos amigos. se também queres amigos devias vir experimentar! Não te vais arrepender! Contamos contigo e boas explicações!”',
  ],
  [
    'Marta Dourado',
    '“Centro de estudo fantástico. Pessoas maravilhosas que fazem tudo para ajudar o aluno da melhor forma possível. Recomendo muito.”',
  ],
]

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
      <StatsBanner/>
      <Box my={10} display='flex'>
        <Container maxWidth='lg'>
          <Typography variant="h6" color="textSecondary" textAlign='center'>Os nossos serviços</Typography>
          <Typography variant="h5" color="textPrimary" textAlign='center'>Conheça o que temos para lhe oferecer</Typography>
          <Grid container spacing={3} mt={4}>
            {cards.map((card, id) => (
              <Grid key={id} item xs={12} md={4}>
                <Card sx={{backgroundColor: 'common.white', height: '100%'}}>
                  <Link to={card[3]} style={{textDecoration: 'none', color: 'inherit'}}>
                    <CardActionArea sx={{height: '100%'}}>
                      <CardContent>
                        <Box display='flex' flexDirection='column' alignItems='center'>
                          <img src={require(`../assets/${card[0]}`)} alt={`Icon ${card[1]}`} width={50}/>
                          <Typography variant="h6" color="common.black" textTransform='none' textAlign='center'>{card[1]}</Typography>
                          <Typography variant="body1" color="common.black" textAlign='center'>{card[2]}</Typography>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <InfoSection 
        title={Data.Section1.title}
        subtitle={Data.Section1.subtitle}
        text={Data.Section1.text}
        img={Data.Section1.img}
        buttonWhite={Data.Section1.buttonWhite}
        imageFirst={Data.Section1.imageFirst}
        backgroundBlue={Data.Section1.backgroundBlue}
      />
      <InfoSection 
        title={Data.Section2.title}
        subtitle={Data.Section2.subtitle}
        text={Data.Section2.text}
        img={Data.Section2.img}
        buttonWhite={Data.Section2.buttonWhite}
        imageFirst={Data.Section2.imageFirst}
        backgroundBlue={Data.Section2.backgroundBlue}
      />
     <Testimonials testimonials={testimonials}/>
    </>
  )
}

export default Home
