import React,{useEffect,useState} from 'react';
import { Pagination } from '@mui/material';
import {Box,Stack,Typography} from '@mui/material';
import { exerciseOptions,fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({exercises,setExercises,bodyPart}) => {
  console.log(exercises);
  return (
    <Box id="exercises" 
    sx={{ mt: { lg: '109px' } }} 
    mt="50px" p="20px"
    >
      <Typography variant='h4' mb='46px'>
        Showing Results
      </Typography>
      <Stack flexDirection="row" 
      sx={{ gap: { lg: '107px', xs: '50px' } }} 
      flexWrap="wrap" 
      justifyContent="center"
      >
        {exercises.map((exercise,index) =>{
          return <ExerciseCard id={index} exercise={exercise} />
        })}
      </Stack>
    </Box>
  )
}

export default Exercises;