import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{ borderRadius: 20, border: "1px solid #e3e3e3", boxShadow: "none"}}
    >
      <input className="search-bar" placeholder="Search...."/>
      <IconButton type="sumbit" sx={{p:"10px"}}>
        <Search/>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
