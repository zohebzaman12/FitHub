import React from 'react';
import { Link } from 'react-router-dom';
import { Button,Stack, Typography,Box } from '@mui/material';

const ExerciseCard = ({exercise}) => {

  function scrollToTop() {
    // Scroll to the top of the page with a smooth transition
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <Link className='exercise-card' onClick ={scrollToTop} to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
  
        <Stack direction="row">
          <Button sx={{ml:'21px', color:'white', background: '#FF2625', fontSize:'14px', borderRadius:'20px', textTransform:"capitalize"}}>{exercise.bodyPart}</Button>
          <Button sx={{ml:'21px', color:'white', background: '#fcc757', fontSize:'14px', borderRadius:'20px', textTransform:"capitalize"}}>{exercise.target}</Button> 
        </Stack>
        <Typography ml="10px" mt="11px" fontWeight="bolder" pb="10px" textTransform="uppercase" fontSize="20px" color="#000">
          {exercise.name}
        </Typography>

        
      
    </Link>
  )
}

export default ExerciseCard