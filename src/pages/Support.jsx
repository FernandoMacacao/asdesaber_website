import React from 'react'
import Hero from "../components/Hero"
import CardSection from '../components/CardSection'
import Data from '../data/support/data.json'
import Banner from '../assets/banner_support.png'
import { Box, Container, Typography, Button, Grid, useMediaQuery } from '@mui/material'

const Support = () => {

  const isFullWidth = useMediaQuery((theme) => theme.breakpoints.down("md"))

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
      <CardSection 
        title='Os Nossos planos'
        subtitle='Escolha o plano ideal para o ajudar a alcançar os seus objetivos académicos'
        plans={Data.Plans}
      />
      <Box 
        sx={{
          backgroundImage: `url(${Banner})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maxWidth: '100vw',
          height: '30vh',
          mt: 10
        }}>
          <Container maxWidth='lg' sx={{height: '100%'}}>
            <Box display='flex' height='100%' flexDirection='column' justifyContent='center' alignItems='center' width='100%'>
              <Typography variant="h5" color="common.white" textAlign='center'>Consulte o nosso Programa de Orientação Vocacional </Typography>
              <Grid display='flex' justifyContent='center' flexDirection={{xs: 'column', md: 'row'}} container spacing={2} mt={1}>
                <Grid item>
                  <Button variant="contained" color="secondary" fullWidth={isFullWidth}>Psicologia e Psicomotricidade</Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="secondary" fullWidth={isFullWidth}>Orientação Vocacional</Button>
                </Grid>
              </Grid>
            </Box>
          </Container>
      </Box>
    </>

  )
}

export default Support
