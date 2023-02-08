import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button, Container, Grid, MenuItem, TextField, useMediaQuery } from '@mui/material'

const subjects = ['Explicações', 'Estudo Acompanhado', 'Cursos Intensivos', 'Outro']

const MessageForm = () => {

    const [subject, setSubject] = useState('')

    const handleChange = (event) => {
        setSubject(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const isFullWidth = useMediaQuery((theme) => theme.breakpoints.down("md"))

    return (
        <Box py={3} boxShadow=' -2px 0px 5px 0px rgba(0,0,0,0.75)' height='100%' display='flex' alignItems='center' component='form' noValidate autoComplete="off">
            <Container maxWidth="lg">
                <Typography variant="h6" color="textSecondary" textAlign='center' mb={{md: 5, xs: 2}}>Envie-nos uma mensagem</Typography>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <TextField required type='text' id="outlined-basic" label="Primeiro Nome" variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item xs={12} md={6} mt={{xs: 1, md: 0}}>
                        <TextField required type='text' id="outlined-basic" label="Último Nome" variant="outlined" fullWidth/>
                    </Grid>
                </Grid>
                <Grid container spacing={1} mt={{xs:1, md: 2}}>
                    <Grid item xs={12} md={6}>
                        <TextField  required type='email' id="outlined-basic" label="Email" variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item xs={12} md={6} mt={{xs: 1, md: 0}}>
                        <TextField required type='phone' id="outlined-basic" label="Telemóvel" variant="outlined" fullWidth/>
                    </Grid>
                </Grid>
                <Grid container spacing={1} mt={{xs:1, md: 2}}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="outlined-select-currency"
                            select
                            label="Assunto"
                            fullWidth
                            onChange={handleChange}
                        >
                        {subjects.map((subject, id) => (
                            <MenuItem key={id} value={subject}>
                                {subject}
                            </MenuItem>
                        ))}
                        </TextField>
                    </Grid>
                </Grid>
                {subject === 'Outro' ? 
                    <Grid container spacing={1} mt={{xs:1, md: 2}}>
                        <Grid item xs={12}>
                            <TextField required type='text' id="outlined-basic" label="Assunto" variant="outlined" fullWidth/>
                        </Grid>
                    </Grid>
                    :
                    undefined
                }
                <Grid container spacing={1} mt={{xs:1, md: 2}}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="outlined-multiline-static"
                            label="Corpo da Mensagem"
                            multiline
                            rows={4}
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1} mt={{xs:0, md: 2}}>
                    <Grid item xs={12}>
                        <Button type='submit' onClick={handleSubmit} variant="contained" color="primary" fullWidth={isFullWidth}>
                          Enviar
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default MessageForm
