import React from "react";
import logored from "../images/logored.png";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { grey } from "@mui/material/colors";
import { pink } from "@mui/material/colors";

function Header(props) {
  return (
    <div className="header">
      <img src={logored} alt="logo" className="logo" />

      <div className="header-mid">
        <input
          type="text"
          onClick={() => {
            props.setShow(!props.show);
          }}
        />
        <SearchIcon
          sx={{
            fontSize: 20,
            color: grey[500],
            backgroundColor: pink[500],
            borderRadius: 20,
            padding: 1,
            margin: 0.5
          }}
        />
      </div>
      <div className="header-r">
        <div>
          <h5>Become a host</h5>
          <LanguageIcon className="icon" />
        </div>
        <div className="header-acc">
          <DehazeIcon />
          <AccountCircleIcon sx={{ color: grey[500] }} />
        </div>
      </div>
    </div>
  );
}

export default Header;
