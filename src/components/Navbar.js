import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack
    flexDirection="row"
    sx={{gap:{ sm:'20px',xs: '10px'}, mt:{sm:'32px',xs: '20px'},}}
    alignItems="center"
    px='20px'
    >
      <Link to='/'>
        <img src={Logo} alt='Logo' style={{height:"100px",width:"100px",margin:'0px 20px'}}/>
      </Link>
      <Stack
        flexDirection="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={{textDecoration:'none',color:'#3A1212',borderBottom:"2px solid #FF2625"}}>Home</Link>
        <a href='#exercises' style={{textDecoration:'none',color:'#3A1212'}}>Exercises</a>
    </Stack>
    </Stack>
    
  )
}

export default Navbar