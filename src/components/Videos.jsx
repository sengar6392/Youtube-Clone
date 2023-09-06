import { Box, Stack } from '@mui/material'
import React from 'react'
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({videos,direction}) => {
    if(videos!==null)
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" gap={2}>
        {
            videos.map((item,idx)=>{
                return(
                    <Box key={idx}>
                        {item.id.videoId && <VideoCard videoDetail={item}/>}
                        {item.id.channelId && <ChannelCard channelDetail={item}/>}
                    </Box>
                )
            })
        }
    </Stack>
  )
}

export default Videos