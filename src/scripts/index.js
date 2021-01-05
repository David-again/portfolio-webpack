import _ from 'lodash';
import '../css/styles.css';
import MobileMenu from './modules/Mobile-Menu';

let mobileMenu = new MobileMenu();



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