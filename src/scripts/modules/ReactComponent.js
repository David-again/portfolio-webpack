import React from 'react';
const myVillains = require('supervillains');
myVillains.all;
// document.write(myVillains.random());

function ReactComponent() {
    return (
      <div>
        <h2>Contact me</h2>
        <p> I would love to hear from you.  Please email me, or connect on Github/LinkedIn.  Also, feel free to leave me a note here with the feedback form. </p>
        {/* <p>{myVillains.random()}</p> */}
      </div>
    )
  }

  export default ReactComponent;