import { Box,  Typography } from '@mui/material'
import React from 'react'
import styledComponents from 'styled-components'

const Image = styledComponents.img`
    width: 45vw;
`

function Header() {
  return (
    <Box sx={{height:'29vw', backgroundColor:'#F1F3FF', display:'flex', alignItems: 'center'}}>
        <Box sx={{ml:11}}>
            <Box sx={{width: '75%'}}>
                <Typography variant='h1' sx={{fontWeight:'bold', fontSize:'2.5vw', mb:2}}>Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)</Typography>
                <Typography variant='h6' sx={{fontSize:'1vw', fontWeight:'normal'}}>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</Typography>
            </Box>
        </Box>
        <Box sx={{mt:6}}>
            <Image src="images/img_car.png" alt="" srcset=""/>
        </Box>
    </Box>
  )
}

export default Header