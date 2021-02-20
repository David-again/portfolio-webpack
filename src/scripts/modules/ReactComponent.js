import React from 'react';
const myVillains = require('supervillains');
myVillains.all;
// document.write(myVillains.random());

function ReactComponent() {
    return (
      <div>
        <h2>Contact me</h2>
        <p> Please use the links below to email me, connect on Github/LinkedIn, or leave your feedback. </p>
        <p> This portfolio will be updated as more of my projects are completed.  You can provide your contact details via the feedback link below if you would like to be notified of updates. </p>
        {/* <p>{myVillains.random()}</p> */}
      </div>
    )
  }

  export default ReactComponent;