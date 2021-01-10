import _ from 'lodash';
import '../css/styles.css';
import MobileMenu from './modules/Mobile-Menu';
// import Modal from './modules/Modal';

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



  // console.log("Hello JavaScript!!!");
// function component() {
//     const element = document.createElement('div');
  
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     // element.classList.add('hello');

//     return element;
//   }
  // document.body.appendChild(component());