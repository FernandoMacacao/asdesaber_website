import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Button, Grid, Typography, Container } from '@mui/material'
import { Link } from 'react-router-dom'


const Hero = ({ title, subtitle, img, noButton, singleButton, firstButton, secondButton }) => {

    const [heroImage, setHeroImage] = useState(null)

    useEffect(() => {
      const loadImage = async () => {
        const image = await import(`../assets/${img}`)
        setHeroImage(image.default)
      }
  
      loadImage()
    }, [img])

    return (
        <Box 
            sx={{
                backgroundImage: `url(${heroImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                maxWidth: '100vw',
                height: '80vh',
                mt: { md: 8, xs: 7}
        }}>
            <Container maxWidth='lg' sx={{height: '100%'}} >
                <Box display='flex' height='100%' flexDirection='column' justifyContent='center' width='100%'>
                    <Typography variant="h2" color="common.white"  width='57%'>{title}</Typography>
                    <Typography variant="body1" color="common.white" mt={2}  width='50%'>{subtitle}</Typography>
                    { noButton ? undefined :
                        <>
                            { singleButton ? 
                                <Grid container spacing={2}  mt={4}>
                                    <Grid item>
                                        <Button variant='contained' color='secondary'>{firstButton}</Button>
                                    </Grid>
                                </Grid>
                                :
                                <Grid container spacing={2}  mt={4}>
                                    <Grid item>
                                        <Button variant='contained' color='secondary'>{firstButton}</Button>
                                    </Grid>
                                    <Grid item>
                                        <Link to='/sobrenos' style={{textDecoration: 'none'}}>
                                            <Button variant='outlined' color='secondary'>{secondButton}</Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            }
                        </>
                    }
                </Box>
            </Container>
        </Box>
    )
}

export default Hero
