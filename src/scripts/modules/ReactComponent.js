import React from 'react';
const myVillains = require('supervillains');
myVillains.all;
// document.write(myVillains.random());

function ReactComponent() {
    return (
      <div>
        <h2>Contact me</h2>
        <p> ... or provide feedback: </p>
        {/* Leave me a message! */}
        <p>{myVillains.random()}</p>
      </div>
    )
  }

  export default ReactComponent;