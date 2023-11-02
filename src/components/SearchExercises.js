import React, {useEffect,useState} from 'react'
import { Box,Typography,Button,Stack,TextField } from '@mui/material'
import {exerciseOptions,fetchData} from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
  const [search,setSearch] = useState('');
  const [bodyParts, setbodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () =>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
      setbodyParts(['all', ...bodyPartsData]);
    }
   fetchExercisesData();
  }, [])
  

  const handleSearch = async () => {
    const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=1000';
    if(search){
      const exercisesData = await fetchData(url, exerciseOptions);
      const searchedExercises = exercisesData.filter((exercise)=>
        exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)

      )
      setSearch('');
      setExercises(searchedExercises);
      
    }
  }

  return (
    <Stack mt="37px" p="20px" justifyContent="center" alignItems="center">
      <Typography textAlign="center" fontWeight={700} mb="50px" sx={{fontSize: {lg:"44px", xs:"30px"}}}>
        Search For Exercises For <br /> Different Body Parts
      </Typography>
      <Box position="relative" mb="72px">
          <TextField 
            height="76px"
            value={search}
            onChange={(e) =>{setSearch(e.target.value.toLowerCase())}}
            placeholder="Search for your exercise"
            type='text'

            sx={{
              input: {fontWeight:"700", border:"none", borderRadius:"100px"},
              width:{lg:'800px' , xs:'350px'}
            }}
          >
            
          </TextField>
          <Button className='search-btn'
            sx={{
              bgcolor:'#FF2625',
              color:"white",
              textTransform:'none',
              width:{lg:'175px', sx:'100px'},
              fontSize:{lg:'20px', sx:'14px'},
              height:'56px',
              position:"absolute",
              right:'0',

              
            }}
            onClick = {handleSearch}
          >Search</Button>
      </Box>
      <Box sx={{position:'relative', width:'100%',p:'20px'}}>
            <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts={true}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises