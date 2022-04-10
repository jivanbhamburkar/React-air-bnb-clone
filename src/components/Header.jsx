import React from "react";
import logored from "../images/logored.png";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { grey } from '@mui/material/colors';
function Header(props) {
  return (
    <div className="header">
      <img src={logored} alt="logo" className="logo" />

      <div className="header-mid">
        <input type="text" onClick={()=>{props.setShow(!props.show)}}/>
        <SearchIcon sx={{ fontSize: 30 }} />
      </div>
      <div className="header-r">
        <div>
        <p>Become a host</p>
        <LanguageIcon />
        </div>
        <div className="header-acc">
          <DehazeIcon />
          <AccountCircleIcon sx={{ color: grey[500] }}/>
        </div>
      </div>
    </div>
  );
}

export default Header;
