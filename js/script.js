/* Created by: Joanne Santhosh
 * Created on: Apr 2022
 * This file contains the JS functions for index.html
 */

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-5-08-HTML/sw.js", {
    scope: "/ICS20-Unit-5-08-HTML/",
  })
}

/**
 * This function allows the user to guess the age
 */
function convert() {
  // input
  const dividend = parseInt(document.getElementById("dividend").value);
  const divisor = parseInt(document.getElementById("divisor").value);
  var result = 0;
  
  // process
  while(dividend >= divisor){
  dividend - divisor
  result++;

  // output
  document.getElementById("answer").innerHTML =
    "The answer is: " + result;
}
