import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm,setSearchTerm]=useState("")
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
  }
  return (
    <Paper
      component="form"
      onSubmit={(e) => {handleSubmit(e)}}
      sx={{ borderRadius: "50px", border: "1px solid #e3e3e3", boxShadow: "none",px:"10px"}}
    >
      <input className="search-bar" placeholder="Search...." onChange={(e)=>{setSearchTerm(e.target.value)}}/>
      <IconButton type="sumbit" sx={{p:"10px"}}>
        <Search/>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
