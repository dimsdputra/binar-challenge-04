import { Box,  Grid, Typography } from '@mui/material'
import styledComponents from 'styled-components';

const Image = styledComponents.img`
    margin-right: 1vw
`
function Footer() {
  return (
      <Box sx={{display:'flex', justifyContent:'center'}} mt={5}>
          <Grid container spacing={2} alignItems="flex-start" justifyContent="center" sx={{marginTop: '5vw'}}>
              <Grid xs='2.5' mb={2}>
                <Typography variant="body2" mb={1}>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</Typography>
                <Typography variant="body2" mb={1}>binarcarrental@gmail.com</Typography>
                <Typography variant="body2" mb={1}>081-233-334-808</Typography>
              </Grid>
              <Grid xs='2' sx={{marginLeft:'2vw'}}>
                  <Typography variant="body2" mb={1}>Our Services</Typography>
                  <Typography variant="body2" mb={1}>Why Us</Typography>
                  <Typography variant="body2" mb={1}>Testimonial</Typography>
                  <Typography variant="body2" mb={1}>FAQ</Typography>
              </Grid>
              <Grid xs='2'>
                  <Typography variant="body2" mb={1}>Connect with us</Typography>
                  <Box>
                      <Image src="../images/icon_facebook.svg" alt="" srcset="" />
                      <Image src="../images/icon_instagram.svg" alt="" srcset="" />
                      <Image src="../images/icon_mail.svg" alt="" srcset="" />
                      <Image src="../images/icon_twitch.svg" alt="" srcset="" />
                      <Image src="../images/icon_twitter.svg" alt="" srcset="" />
                  </Box>
              </Grid>
              <Grid xs='2' sx={{marginLeft:'5vw'}}>
                    <Typography variant="body2" mb={1}>Copyright Binar 2022</Typography>
                    <Image src="../images/logo.svg" alt="" srcset="" />
              </Grid>
          </Grid>
      </Box>
  )
}

export default Footer