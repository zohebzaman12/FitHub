import React,{useState} from 'react'
import { Box } from '@mui/material'
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import Exercises from '../components/Exercises'

const Home = () => {
  const [bodyPart, setbodyPart] = useState(['all']);
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  
  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setbodyPart}
        loading={loading}
        setLoading = {setLoading}
      />
      <Exercises 
          exercises={exercises}
          setExercises={setExercises}
          bodyPart={bodyPart}
          loading={loading}
      />
    </Box>
  )
}

export default Home