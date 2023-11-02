import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollBar'
import Loader from './Loader'

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  console.log(targetMuscleExercises, equipmentExercises);
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> Exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} isBodyParts={false} /> : <Loader />}
    </Stack>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> Exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} isBodyParts={false} /> : <Loader />}
    </Stack>
  </Box>

  )
}

export default SimilarExercises