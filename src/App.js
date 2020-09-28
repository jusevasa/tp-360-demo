import React from 'react';
import './App.css';
import { Pannellum } from "pannellum-react";
import myImage from "./images/milan.jpg";

function App() {
  return (
    <div className="App">
      <Pannellum
        width="100%"
        height="100vh"
        image={myImage}
        pitch={10}
        yaw={220}
        hfov={110}
        autoLoad
        showZoomCtrl={false}
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={-1}
          yaw={150}
          handleClick={(evt, name) => console.log(name)}
          name="hs1"
        />
      </Pannellum>
    </div>
  );
}

export default App;
