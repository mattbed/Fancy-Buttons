import React from 'react';

function AngryButton(){
  return (
    <button className="AngryButton">
      {/*If you have not reached the max */}<span>Don't click me too much!</span>
      {/*If you HAVE reached the max */}<span>RAWR!</span>
    </button>
  );
}

export default AngryButton;