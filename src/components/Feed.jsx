import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { fetchFromAPI } from "../utils/fetchFromApi";
import Videos from "./Videos";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "90vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: "0", md: 2 },
        }}
      >
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      </Box>
      <Box p={2} sx={{overflowY:"auto",height:"90vh"}}>
        <Typography fontWeight="bold" mb={2}>
          {selectedCategory} Videos
        </Typography>
        <Videos videos={videos}/>
        
      </Box>
    </Stack>
  );
};

export default Feed;
