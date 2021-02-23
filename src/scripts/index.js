import _ from 'lodash';
import '../css/styles.css';
import 'lazysizes';
import MobileMenu from './modules/Mobile-Menu';

let mobileMenu = new MobileMenu();
let modal;

if (module.hot) {
   module.hot.accept()
}