import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos,setRelatedVideos]=useState(null)
  useEffect(() => {
    const fetchVideoData = async () => {
      let videoDataResult = await fetchFromAPI(`videos?part=snippet,statistics&id=${id}`);
      setVideoDetail(videoDataResult.items[0]);
      let relatedVideoResult=await fetchFromAPI(`search?part=snippet&relatedtoVideo=${id}&type=video`)
      setRelatedVideos(relatedVideoResult.items)
    };
    fetchVideoData();
  }, [id]);
  if (videoDetail !== null) {
    const {
      snippet: { title, channelId, channelTitle },
      statistics: { viewCount, likeCount },
    } = videoDetail;

    return (
      <Box minHeight="95vh">
        <Stack direction={{ xs: "column", md: "row" }}>
          <Box flex={1} sx={{ width: "100%" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              class="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Box sx={{px:2,py:{xs:6,md:1}}} justifyContent="center" alignItems="center">
            <Videos videos={relatedVideos} direction="column"/>
          </Box>
        </Stack>
      </Box>
    );
  }
};
export default VideoDetail;
