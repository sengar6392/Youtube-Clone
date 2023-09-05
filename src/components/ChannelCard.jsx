import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { demoProfilePicture } from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail,channelDetail: { snippet } }) => {
  return (
    <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto'
    }}
  >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{display:"flex", flexDirection:"column",justifyContent:"center",textAlign:"center"}}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{height:"180px", width:"180px", borderRadius:"50%", mb:"4px",border: '1px solid #e3e3e3'}}
        />
        <Typography color="white" variant="h6">
        {snippet?.title}
        <CheckCircle sx={{ml:"5px",fontSize:"14px"}}/>
        </Typography>
        <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
          {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
        </Typography>
      </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
