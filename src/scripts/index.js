import _ from 'lodash';
// import '../css/styles.css';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack', 'world!!!'], ' ');
    // element.classList.add('hello');

    return element;
  }
  
  document.body.appendChild(component());

//   if (module.hot) {
//     module.hot.accept()
//   }