import React from "react";
import logored from "../images/logored.png";
import SearchIcon from '@mui/icons-material/Search';
import { ExpandMore } from '@mui/icons-material';
// import { ExpandMoreIcon } from "@mui/icons-material";
import LanguageIcon from "@mui/icons-material/Language";
import  AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DehazeIcon from '@mui/icons-material/Dehaze';


function Header() {
  return (
    <div className="header">
      <div>
        <img src={logored} alt="logo" />
      </div>
      <div>
        <input type="text" />
        <SearchIcon />
      </div>
      <div>
          <p>Become a host</p>
          <LanguageIcon />
          {/* <ExpandMoreIcon /> */}
          {/* <ExpandMore /> */}
          <div>
          <DehazeIcon/>
          <AccountCircleIcon />
          </div>
      </div>
    </div>
  );
}

export default Header;
