import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{ borderRadius: "50px", border: "1px solid #e3e3e3", boxShadow: "none",px:"10px"}}
    >
      <input className="search-bar" placeholder="Search...."/>
      <IconButton type="sumbit" sx={{p:"10px"}}>
        <Search/>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
