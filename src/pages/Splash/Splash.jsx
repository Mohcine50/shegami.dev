import React, { useEffect, useRef } from "react";
import "./splash.css";
function Splash() {
  return (
    <div className='splash'>
      <h1>SHEGAMI</h1>
      <div className='loading'>
        <span></span>
      </div>
    </div>
  );
}

export default Splash;
