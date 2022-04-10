import { Box } from '@mui/material'
import React from 'react'
import CardCar from '../components/CardCar'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Search from '../components/Search'

function Cari() {
  return (
      <div>
        <Navbar/>
        <Box sx={{backgroundColor:'#F1F3FF', height:'10vw'}}></Box>
        <Search/>
        <CardCar/>
        <Footer/>
      </div>
  )
}

export default Cari