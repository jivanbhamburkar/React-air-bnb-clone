import "./App.css";
import React, { useState } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Header from "./components/Header";
import Header1 from "./components/Header1";
import Help from "./components/Help";
import Search from "./components/Search";
import Image from "./components/Image";
import Cards from "./components/Cards";

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <ReactScrollWheelHandler
        upHandler={(e) => {
          if (e.layerY < 600) {
            // console.log(e.layerY);
            if (!show) setShow(true);
          }
        }}
        downHandler={() => {
          if (show) {
            setShow(false);
          }
        }}
      >
        <div className="app">
          {show ? (
            <>
              <Header1 />
              <Search />
            </>
          ) : (
            <Header show={show} setShow={setShow} />
          )}

          <Help />

          <Image />
        </div>
        <div style={{ backgroundColor: "white" }}>
          <Cards />
        </div>
      </ReactScrollWheelHandler>
    </>
  );
}

export default App;
