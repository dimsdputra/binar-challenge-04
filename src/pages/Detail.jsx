import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Footer from '../components/Footer'
import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import styled from '@emotion/styled';
import styledComponents from 'styled-components';


const BootstrapButton = styled(Button)({
  marginTop:'1vw',
  float:'right',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
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

const Image = styledComponents.img`
  margin: 2vw 0 0 6vw;
    width: 18vw;
`

function Detail() {
  return (
    <>
      <Navbar/>
      <Box sx={{backgroundColor:'#F1F3FF', height:'10vw'}}></Box>
      <Search/>
      <Box sx={{width:'78%', marginLeft:'11%', marginTop:'3vw', marginBottom:'3vw'}}>
        <Grid 
          container
          spacing={3}
          alignItems="flex"
          justifyContent="center"
        >
          <Grid item xs={7}>
            <Box>
              <Card sx={{boxShadow:2}}>
                <Typography variant='body1' ml={2} mt={4} mb={2} sx={{fontWeight:'600'}}>Tentang Paket</Typography>
                <Typography variant='body2' ml={2}>Include</Typography>
                <Box>
                  <ul>
                    <li><Typography variant='body2'>Apa saja yang termasuk dalam paket misal durasi max 12 jam</Typography></li>
                    <li><Typography variant='body2'>Sudah termasuk bensin selama 12 jam</Typography></li>
                    <li><Typography variant='body2'>Sudah termasuk tiket wisata</Typography></li>
                    <li><Typography variant='body2'>Sudah termasuk pajak</Typography></li>
                  </ul>
                </Box>
                <Typography variant='body2' ml={2}>Exclude</Typography>
                <Box>
                  <ul>
                    <li><Typography variant='body2'>Tidak termasuk biaya makan sopir Rp. 75.000/hari</Typography></li>
                    <li><Typography variant='body2'>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000/jam</Typography></li>
                    <li><Typography variant='body2'>Tidak termasuk akomodasi penginapan</Typography></li>
                  </ul>
                </Box>
                <Typography variant='body1' ml={2}  sx={{fontWeight:'600'}}>Refund, Reschedule, Overtime</Typography>
                <Box mb={4}>
                  <ul>
                    <li><Typography variant='body2'>Tidak termasuk biaya makan sopir Rp. 75.000/hari</Typography></li>
                    <li><Typography variant='body2'>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000/jam</Typography></li>
                    <li><Typography variant='body2'>Tidak termasuk akomodasi penginapan</Typography></li>
                    <li><Typography variant='body2'>Tidak termasuk biaya makan sopir Rp. 75.000/hari</Typography></li>
                    <li><Typography variant='body2'>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000/jam</Typography></li>
                    <li><Typography variant='body2'>Tidak termasuk akomodasi penginapan</Typography></li>
                    <li><Typography variant='body2'>Tidak termasuk biaya makan sopir Rp. 75.000/hari</Typography></li>
                    <li><Typography variant='body2'>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000/jam</Typography></li>
                    <li><Typography variant='body2'>Tidak termasuk akomodasi penginapan</Typography></li>
                  </ul>
                </Box>
              </Card>
              <BootstrapButton variant="contained" sx={{width:'18vw'}}>Lanjutkan pembayaran</BootstrapButton>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box>
              <Card sx={{boxShadow:2}}>
                <Image src="../images/image 1.png" alt="" srcset=""/>
                    <CardContent>
                        <Typography gutterBottom variant="body1" component="div" sx={{fontWeight:'600'}}>
                        Nama/Tipe Mobil
                        </Typography>
                        <Box sx={{display:'flex', alignItems:'center', marginBottom:'5vw'}}>
                          <Typography variant="body2" sx={{alignItems:'center', display:'flex', marginRight:'1.5vw'}}><PeopleOutlineIcon sx={{marginRight:'.2vw'}}/> 4 Orang</Typography>
                          <Typography variant="body2" sx={{alignItems:'center', display:'flex', marginRight:'1.5vw'}}><SettingsOutlinedIcon sx={{marginRight:'.2vw'}}/> Manual</Typography>
                          <Typography variant="body2" sx={{alignItems:'center', display:'flex'}}><CalendarTodayOutlinedIcon sx={{marginRight:'.2vw'}}/> Tahun 2020</Typography>
                        </Box>
                        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                          <Typography variant='body1'>Total</Typography>
                          <Typography variant='h6' sx={{fontWeight:'600'}}>Rp. 430.000</Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                    <BootstrapButton variant="contained" sx={{width:'30vw'}}>Lanjutkan Pembayaran
                    </BootstrapButton>
                    </CardActions>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer/>
    </>
  )
}

export default Detail