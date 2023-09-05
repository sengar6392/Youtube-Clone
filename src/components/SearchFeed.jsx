import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { fetchFromAPI } from "../utils/fetchFromApi";
import Videos from "./Videos";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const {searchTerm}=useParams()
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
    }, [searchTerm]);

  return (
      <Box p={2} sx={{overflowY:"auto",height:"90vh",minHeight:"95vh"}}>
        <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
          Search results for <span style={{color:"red"}}>{searchTerm}</span>  
        </Typography>
        <Videos videos={videos}/>
        
      </Box>
  );
};

export default SearchFeed;
