import React from 'react'
import {Box,Button,Stack,Typography} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

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
        fontSize="26px"
      >
        FitHub
      </Typography>
      <Typography
        fontWeight='700'
        sx={{
          fontSize:{lg:'44px', xs:'40px'}
        }}
      >
        Sweat, Smile <br /> and Repeat.
      </Typography>
      <Typography
        fontSize='22px'
        lineHeight='35px'
        mb='20px'
      >
        Check out the most effective exercises.
      </Typography>
      <Button variant='contained' color='error' href='#exercises'>Explore Exercises</Button>
      <img src={HeroBannerImage} alt='Banner' className='hero-banner-img'></img>
    </Box>
  )
}

export default HeroBanner