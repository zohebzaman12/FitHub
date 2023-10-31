import React,{useEffect,useState} from 'react';
import { Pagination } from '@mui/material';
import {Box,Stack,Typography} from '@mui/material';
import { exerciseOptions,fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({exercises,setExercises,bodyPart}) => {
  const [currentPage, setcurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;

  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage; 
    let currentExercises =[];
  if(exercises.length > 1){
    currentExercises = exercises.splice(indexOfFirstExercise,indexOfLastExercise);
  }
  

  const paginate = (e, value) => {
      setcurrentPage(value);
      window.scrollTo({top:'1800px', behavior:"smooth"})
  }

  useEffect(() => {
   const fetchExercisesData = async() =>{
    let exercisesData =[];
    if(bodyPart === 'all'){
      exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
    }else{
      exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions);
    }

      setExercises(exercisesData);    
   }
   fetchExercisesData();
  }, [bodyPart])

   
  
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
        {currentExercises.map((exercise,index) =>{
          return <ExerciseCard id={index} exercise={exercise} />
        })}
      </Stack>
      <Stack mt="100px" alignItems="center" >
        {exercises.length > 9 && (
          <Pagination 
            color='standard'
            shape='rounded'
            count={Math.ceil(exercises.length/exercisesPerPage)}
            onChange={paginate}
            page={currentPage}
            size='large'
          />
        )}

      </Stack>
    </Box>
  )
}

export default Exercises;