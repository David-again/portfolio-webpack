import _ from 'lodash';
import '../css/styles.css';
import 'lazysizes';
import MobileMenu from './modules/Mobile-Menu';
// import Modal from './modules/Modal';

// const myVillains = require('supervillains');
// myVillains.all;
// console.log(myVillains.random());

import React from 'react';
import ReactDOM from 'react-dom';
import ReactComponent from './modules/ReactComponent';

ReactDOM.render(<ReactComponent />, document.querySelector("#main-doc-react"));

// new Modal();
let mobileMenu = new MobileMenu();
let modal;

document.querySelectorAll(".under-construction").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault();
    if (typeof modal == "undefined") {
      import('./modules/Modal').then(x => {
        modal = new x.default();
        setTimeout(() => modal.openTheModal(), 20);
      }).catch(() => console.log("There was a problem."))
    } else {
      modal.openTheModal();
    }
  })
})

  if (module.hot) {
    module.hot.accept()
  }