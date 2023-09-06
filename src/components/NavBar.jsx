import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const NavBar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    zIndex="10"
    justifyContent="space-between"
    sx={{ backgroundColor: "#000", position: "sticky", top: 0 }}
  >
    <Link to="/" sx={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height="45" />
    </Link>
    <SearchBar />
  </Stack>
);

export default NavBar;
