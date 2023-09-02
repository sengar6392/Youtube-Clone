import { Box, Stack } from '@mui/material'
import React from 'react'
import SideBar from './SideBar'

const Feed = () => {
  return (
    <Stack sx={{flexDirection:{sx:"column",md:"row"}}}>
      <Box sx={{height:{sx:"auto",md:"90vh"},borderRight:"1px solid #3d3d3d",px:{sx:"0",md:2}}}>
        <SideBar/>
      </Box>
      <Box>
        Videos
      </Box>
    </Stack>
  )
}

export default Feed