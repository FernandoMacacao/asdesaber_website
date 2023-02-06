import { Container, Box } from '@mui/system'
import React from 'react'
import CountUp from 'react-countup'
import Typography from '@mui/material/Typography'

const numbers = [1237, 7, 12, 17]
const text = ['Alunos', 'Áreas de estudo', 'Professores Certificados', 'Anos de experiência']

const StatsBanner = () => {
    
    return (
        <Box height='10vh' sx={{backgroundColor: '#1893c6'}} display='flex' alignItems='center'>
            <Container maxWidth='lg'>
                <Box display='flex' justifyContent='space-between'>
                    { numbers.map((num, id) => (
                        <Box key={id} display='flex' flexDirection='column' alignItems='center'>
                            <CountUp
                                start={0}
                                end={num}
                                duration={3}
                                delay={0}
                                style={{color: '#f5f5f5', fontFamily: 'Lato', fontSize: '1.5rem', fontWeight: 700}}
                            />
                            <Typography variant="body1" color="common.white">{text[id]}</Typography>
                        </Box>
                        ))
                    }
                </Box>
           
            </Container>
        </Box>
    )
}

export default StatsBanner
