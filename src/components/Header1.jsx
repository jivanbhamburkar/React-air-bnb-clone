import React from "react";
import "./Header1.css";
import logowhite from "../images/logowhite.png";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { grey } from "@mui/material/colors";

function Header1() {
  return (
    <>
      <div className="header1">
        <img src={logowhite} alt="logo" className="logo1" />
        <div className="exp">
          <p>Places to stay</p>
          <p>Experiences</p>
          <p>Online Experiences</p>
        </div>

        <div className="header-r1">
          <div>
            <h5>Become a host</h5>
            <LanguageIcon className="icon" />
          </div>
          <div className="header-acc1">
            <DehazeIcon sx={{ color: grey[500], fontSize: 30 }} />
            <AccountCircleIcon sx={{ color: grey[500], fontSize: 30 }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header1;
