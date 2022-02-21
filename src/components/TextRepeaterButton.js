import React, { useState } from "react";

function TextRepeaterButton(props){
  const [repetitions, setRepititions] = useState(1);
  const textArray = [];
  for (let i = 0; i < repetitions; i++) {
    textArray.push(<span key={i}>I like this text </span>);
  }

  const handleClick = () => {
    setRepititions(repetitions + 1);
  }
  return(
    <button className="TextRepeaterButton" onClick={handleClick}>
      { textArray }
    </button>
  );
}

export default TextRepeaterButton;