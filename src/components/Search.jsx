import { Box, Button, Container, FormControl, Grid, InputAdornment, MenuItem, Select,  TextField,  Typography} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import React from 'react';
import styled from '@emotion/styled';
import { Link } from "react-router-dom";
import "../App.css";
  
  const styles = {
    contentUtama: {
      width: '75%',
      backgroundColor: 'white',
      marginTop: '-3vw',
      borderRadius: '8px',
      padding: 5,
      boxShadow: 3
    },
    font: {
      fontSize: '1vw'
    }
  };

  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    width: '10vw',
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


function Search() {
    const [tipeDriver, setTipeDriver] = React.useState('');

    const handleChange = (event) => {
        setTipeDriver(event.target.value);
    };


  return (
        
        <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={styles.contentUtama}>
          <FormControl>
            <Grid
              container
              spacing={2}
              alignItems="flex-end"
              justifyContent="center"
            >
              <Grid item xs={2.5}>
                  <Box>
                      <Typography variant='caption'>Tipe Driver</Typography>
                          <Select
                            sx={{width:'14.5vw'}}
                            size='small'
                            IconComponent={KeyboardArrowDownIcon}
                            value={tipeDriver}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                          >
                              <MenuItem disabled value="" >
                                  Pilih Tipe Driver
                              </MenuItem>
                              <MenuItem value={10}>Dengan Sopir</MenuItem>
                              <MenuItem value={20}>Tanpa Sopir(Lepas Kunci)</MenuItem>
                          </Select>
                  </Box>                                                                                          
              </Grid>
              <Grid item xs={2.5}>
                  <Typography variant='caption'>Tanggal Jemput</Typography>
                      <TextField
                          sx={{width:'14.5vw'}}
                          size='small'
                          id="date"
                          type="date"
                          InputLabelProps={{
                          shrink: true,
                          }}
                      />
              </Grid>
              <Grid item xs={2.5}>
                <Typography variant="caption">Waktu Jemput/Ambil</Typography>
                  <Select
                    sx={{width:'14.5vw'}}
                    size='small'
                    IconComponent={KeyboardArrowDownIcon}
                    value={tipeDriver}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                    <MenuItem disabled value="" >
                      Pilih Tipe Driver
                    </MenuItem>
                    <MenuItem value={10}>08.00 WIB</MenuItem>
                    <MenuItem value={20}>09.00 WIB</MenuItem>
                    <MenuItem value={20}>10.00 WIB</MenuItem>
                    <MenuItem value={20}>11.00 WIB</MenuItem>
                    <MenuItem value={20}>12.00 WIB</MenuItem>
                  </Select>
              </Grid>
              <Grid item xs={2.5}>
                <Typography variant="caption">
                  Jumlah Penumpang(optional)
                </Typography>
                  <TextField
                    sx={{width:'14.5vw'}}
                    placeholder='Jumlah Penumpang'
                    InputProps={{
                      endAdornment: <InputAdornment position="end"><PeopleAltTwoToneIcon/></InputAdornment>,
                    }}
                    type="text"
                    size='small'
                  />
              </Grid>
              <Grid item xs={2}><Link to="cari">
                <BootstrapButton variant="contained">Cari Mobil
                </BootstrapButton></Link>
              </Grid>
            </Grid>
          </FormControl>
        </Box>
      </Container>
  )
}

export default Search