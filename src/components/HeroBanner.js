import React from 'react'
import {Box,Button,Stack,Typography} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
import Logo2 from '../assets/images/Logo-2.png'

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt:{lg:'212px', xs:'70px'},
        ml:{sm:'50px'}
      }}
      position='relative'
      p='20px'
    >
      <Typography color='#FF3625'
        fontWeight="600"
        fontSize="46px"
      >
         <img src={Logo2} width='600px'/>
      </Typography>
     
      <Typography
        fontWeight='700'
        sx={{
          fontSize:{lg:'44px', xs:'40px'}
        }}
      >
        Sweat, Smile and Repeat.
      </Typography>
      <Typography
        fontSize='22px'
        lineHeight='35px'
        mb='20px'
      >
        Check out the most effective exercises.
      </Typography>
      <Button variant='contained' color='error' href='#search-exercises'>Explore Exercises</Button>
      <Typography fontWeight={600} color="#3C486B" sx={{ opacity: '0', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
      <img src={HeroBannerImage} alt='Banner' className='hero-banner-img'></img>
    </Box>
  )
}

export default HeroBanner