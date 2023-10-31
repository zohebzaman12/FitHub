import React,{useState} from 'react'
import { Box } from '@mui/material'
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import Exercises from '../components/Exercises'

const Home = () => {
  const [bodyPart, setbodyPart] = useState(['all']);
  const [exercises, setExercises] = useState([]);
  
  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setbodyPart}
      />
      <Exercises 
          exercises={exercises}
          setExercises={setExercises}
          bodyPart={bodyPart}
         
      />
    </Box>
  )
}

export default Home