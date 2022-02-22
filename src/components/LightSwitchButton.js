import React, { useState } from "react";

function LightSwitchButton(props){
  const { light, switchLight } = props;
  console.log(light, "switchLight: ", switchLight);  
  return (
    <button className="LightSwitchButton" onClick={switchLight}>
    {light === "on" && <span className="on"><i>💡</i> I'm on!</span>}
    {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}

export default LightSwitchButton;