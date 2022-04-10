import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { grey } from "@mui/material/colors";
import { pink } from "@mui/material/colors";
import "./Header1.css";
// import { borderRadius } from "@mui/system";
function Search() {
  return (
    <>
      <div className="header-mid1">
        {/* <input type="text" /> */}

        <div>
          <h5>Location</h5>
          <p>Where are you going?</p>
        </div>
        |
        <div>
          <h5>Check in</h5>
          <p>Add dates</p>
        </div>
        |
        <div>
          <h5>Check out</h5>
          <p>Add dates</p>
        </div>
        |
        <div>
          <h5>Guests</h5>
          <p>Add Guests</p>
        </div>

        <SearchIcon
          sx={{
            fontSize: 30,
            color: grey[500],
            backgroundColor: pink[500],
            borderRadius: 20,
            padding: 1,
            margin: 0.5,
          }}
        />
      </div>
    </>
  );
}

export default Search;
