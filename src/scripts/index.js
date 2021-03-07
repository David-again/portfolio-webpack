import _ from 'lodash';
import '../css/styles.css';

// Countdown (progress bar) for redirection
var timeleft = 8;
var redirectTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(redirectTimer);
  }
  document.getElementById("progressBar").value = 10 - timeleft;
  timeleft -= 0.25;
}, 250);


if (module.hot) {
   module.hot.accept()
}