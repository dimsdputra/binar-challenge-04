import styled from '@emotion/styled';
import { Box, Button, Card, CardActions, CardContent,  Container,  Grid,  Typography } from '@mui/material'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import React from 'react'
import styledComponents from 'styled-components'
import { Link } from 'react-router-dom';

const Image = styledComponents.img`
    width: 16vw;
    margin: 2vw
`
const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: '1.2vw',
    width:'20vw',
    marginLeft: '.5vw',
    padding: '6px 12px',
    border: '1px solid',
    height: '3vw',
    lineHeight: 1.5,
    backgroundColor: '#5CB85F',
    borderColor: '#5CB85F',
    fontFamily: [
      'Roboto',
    ].join(','),
    '&:hover': {
      backgroundColor: '#86b75b',
      borderColor: '#86b75b',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#5CB85F',
      borderColor: '#5CB85F',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

function CardCar() {
  return (
      <Container maxWidth='lg' sx={{marginBottom:10}}>
        <Box>
        <Grid
              container
              spacing={2}
              alignItems="flex-start"
              justifyContent="center"
            >
                <Grid >
                <Card sx={{ maxWidth:'22vw', marginTop:'5vw', boxShadow: 2 }}>
                    <Image src="images/image 1.png" alt="" srcset=""/>
                    <CardContent>
                        <Typography gutterBottom variant="body1" component="div" sx={{fontWeight:'400'}}>
                        Nama/Tipe Mobil
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div" sx={{fontWeight:'bold'}}>
                        Rp. 430.000 / hari
                        </Typography>
                        <Typography variant="body2" mb={1}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                        <Typography variant="body2" sx={{alignItems:'center', display:'flex'}}><PeopleOutlineIcon sx={{marginRight:1, marginBottom:1}}/> 4 Orang</Typography>
                        <Typography variant="body2" sx={{alignItems:'center', display:'flex'}}><SettingsOutlinedIcon sx={{marginRight:1, marginBottom:1}}/> Manual</Typography>
                        <Typography variant="body2" sx={{alignItems:'center', display:'flex'}}><CalendarTodayOutlinedIcon sx={{marginRight:1}}/> Tahun 2020</Typography>
                    </CardContent>
                    <CardActions>
                      <Link to="detail">
                        <BootstrapButton variant="contained">Pilih Mobil
                        </BootstrapButton>
                      </Link>
                    </CardActions>
                </Card>
                </Grid>
                <Grid >
                <Card sx={{ maxWidth:'22vw', marginTop:'5vw', boxShadow: 2, marginLeft:2, marginRight:2 }}>
                    <Image src="images/image 1.png" alt="" srcset=""/>
                    <CardContent>
                        <Typography gutterBottom variant="body1" component="div" sx={{fontWeight:'400'}}>
                        Nama/Tipe Mobil
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div" sx={{fontWeight:'bold'}}>
                        Rp. 430.000 / hari
                        </Typography>
                        <Typography variant="body2" mb={1}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                        <Typography variant="body2" sx={{alignItems:'center', display:'flex'}}><PeopleOutlineIcon sx={{marginRight:1, marginBottom:1}}/> 4 Orang</Typography>
                        <Typography variant="body2" sx={{alignItems:'center', display:'flex'}}><SettingsOutlinedIcon sx={{marginRight:1, marginBottom:1}}/> Manual</Typography>
                        <Typography variant="body2" sx={{alignItems:'center', display:'flex'}}><CalendarTodayOutlinedIcon sx={{marginRight:1}}/> Tahun 2020</Typography>
                    </CardContent>
                    <CardActions>
                      <Link to="detail">
                        <BootstrapButton variant="contained">Pilih Mobil
                        </BootstrapButton>
                      </Link>
                    </CardActions>
                </Card>
                </Grid>
                <Grid >
                <Card sx={{ maxWidth:'22vw', marginTop:'5vw', boxShadow: 2 }}>
                    <Image src="images/image 1.png" alt="" srcset=""/>
                    <CardContent>
                        <Typography gutterBottom variant="body1" component="div" sx={{fontWeight:'400'}}>
                        Nama/Tipe Mobil
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div" sx={{fontWeight:'bold'}}>
                        Rp. 430.000 / hari
                        </Typography>
                        <Typography variant="body2" mb={1}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                        <Typography variant="body2" sx={{alignItems:'center', display:'flex'}}><PeopleOutlineIcon sx={{marginRight:1, marginBottom:1}}/> 4 Orang</Typography>
                        <Typography variant="body2" sx={{alignItems:'center', display:'flex'}}><SettingsOutlinedIcon sx={{marginRight:1, marginBottom:1}}/> Manual</Typography>
                        <Typography variant="body2" sx={{alignItems:'center', display:'flex'}}><CalendarTodayOutlinedIcon sx={{marginRight:1}}/> Tahun 2020</Typography>
                    </CardContent>
                    <CardActions>
                      <Link to="detail">
                        <BootstrapButton variant="contained">Pilih Mobil
                        </BootstrapButton>
                      </Link>
                    </CardActions>
                </Card>
                </Grid>
            
            </Grid>
        </Box>
      </Container>
  )
}

export default CardCar