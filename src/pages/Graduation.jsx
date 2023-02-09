import React from 'react'
import Areas from '../components/Areas'
import Hero from "../components/Hero"
import Footer from '../components/Footer'
import Data from '../data/graduation/data.json'
import Banner from '../assets/banner_graduation.png'
import DGERTLogo from '../assets/logo_dgert.png'
import { Box, Button, Container, Grid, Typography, useMediaQuery } from '@mui/material'

const Graduation = () => {

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
      <Areas 
        title='As Nossas Áreas De Formação Certificadas'
        subtitle='Conheça as nossas soluções para o seu desenvolvimento'
        cards={Data.Cards}
        hasLink={false}
      />
      <Box
        sx={{
          backgroundImage: `url(${Banner})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maxWidth: '100vw',
          height: '30vh',
        }}>
          <Container maxWidth='lg' sx={{height: '100%'}}>
            <Box display='flex' height='100%' flexDirection='column' justifyContent='center' alignItems='center' width='100%'>
              <Typography variant="h5" color="primary" textAlign='center'>Quer tirar um curso de formação?</Typography>
              <img src={DGERTLogo} alt="DGERT" height='80px' style={{marginTop: '10px'}}/>
              <Grid display='flex' justifyContent='center' flexDirection={{xs: 'column', md: 'row'}} container spacing={2} mt={1}>
                <Grid item>
                  <Button variant="contained" color="secondary" fullWidth={isFullWidth}>Inscreva-se!</Button>
                </Grid>
              </Grid>
            </Box>
          </Container>
      </Box>
     <Footer/>
    </>

  )
}

export default Graduation
