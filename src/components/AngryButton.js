import React, { useState } from "react";

function AngryButton(props){
  const [anger, setAnger] = useState(0);
  
  const handleClick = () => {
    if (anger < 1) {
      setAnger(anger + 0.1);
    } else {
      setAnger(0);
    }
  }
  
  return (
    <button className="AngryButton" style={{backgroundColor: `rgba(255,0,0,${anger})`}} onClick={handleClick}>
      {anger < 1 && <span>Don't click me too much!</span>}
      {anger >= 1 && <span>RAWR!</span>}
    </button>
  );
}

export default AngryButton;