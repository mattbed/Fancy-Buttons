import React, { useState } from "react";

function AngryButton(props){
  const [anger, setAnger] = useState(0);
  return (
    <button className="AngryButton" style={{backgroundColor: `rgba(255,0,0,${anger})`}}>
      {anger < 1 && <span>Don't click me too much!</span>}
      {anger >= 1 && <span>RAWR!</span>}
    </button>
  );
}

export default AngryButton;