import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({
  videoDetail: {
    id: { videoId },
    snippet,
  },
}) => {
  // console.log('videoId',videoId);
  // console.log("snippet", snippet);
  return (
    <Card sx={{width:{xs:"100%",sm:"358px",lg:"340px",xxl:"280px"},boxShadow:"none",borderRadius:"10px"}}>
      <Link to={`/video/${videoId}`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ height: 180, width: "100%" }}
        />
      </Link>
      <CardContent sx={{backgroundColor:"#1e1e1e", height:"106px"}}>
        <Link to={`/video/${videoId}`}>
        <Typography variant="subtitle1" sx={{color:"#fff"}}>
          {snippet?.title.slice(0,50)}
          {snippet.title.length>50?"...":""}
        </Typography>
        </Link>
        <Link to={`/channel/${snippet?.channelId}`}>
           
        <Typography variant="subtitle2" sx={{color:"gray"}}>
          {snippet?.channelTitle}
          <CheckCircle sx={{ml:"5px",fontSize:"12px"}}/>
        </Typography>
        </Link>
      </CardContent>

    </Card>
  );
};

export default VideoCard;
