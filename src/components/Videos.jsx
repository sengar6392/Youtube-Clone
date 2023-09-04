import { Box, Stack } from '@mui/material'
import React from 'react'
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({videos}) => {
    if(videos!==null)
  return (
    <Stack direction="row" flexWrap="wrap" gap={2}>
        {
            videos.map((video,idx)=>{
                return(
                    <Box key={idx}>
                        {video.id.videoId && <VideoCard video={video}/>}
                        {video.id.channelId && <ChannelCard video={video}/>}
                    </Box>
                )
            })
        }
    </Stack>
  )
}

export default Videos