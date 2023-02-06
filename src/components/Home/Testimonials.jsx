import { Card, CardContent, Rating, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import Slider from 'react-slick';
import './Testimonials.css'

const Testimonials = ({ testimonials }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: '900px',
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                speed: 500,
            }            
        }]
      };

    return ( 
        <Box my={10}>
            <Container maxWidth='lg'>
                <Typography variant="h6" color="textSecondary" textAlign='center'>Testemunhos</Typography>
                <Typography variant="h5" color="textPrimary" textAlign='center' mb={7}>O que os nossos alunos pensam sobre nós</Typography>
                <Slider {...settings}>
                    {testimonials.map((testimonial, id) => (
                        <Box key={id} p={2}>
                            <Card sx={{p: 2, backgroundColor: 'common.white'}} >
                                <Box display='flex' alignItems='center' justifyContent='center' sx={{borderRadius: '50%', height: 50, width: 50}} backgroundColor='#1893c6'>
                                   <Typography variant="h6" fontWeight={400} color="common.white">{testimonial[0].charAt(0)}</Typography> 
                                </Box>
                                <CardContent sx={{px: 0}}>
                                    <Typography variant="body1" fontWeight={700} color="textPrimary">{testimonial[0]}</Typography>
                                    <Typography variant="body1" color="textPrimary">{testimonial[1]}</Typography>
                                </CardContent>
                                <Rating name='read-only' value={5} readOnly sx={{mt: 2}}/>
                            </Card>
                        </Box>
                    ))}
                </Slider>
            </Container>
        </Box>
    )
}

export default Testimonials
