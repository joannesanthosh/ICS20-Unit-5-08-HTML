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
 * This function does long division through looping
 */
function convert() {
  // input
  const firstInteger = parseInt(document.getElementById("first-integer").value);
  const secondInteger = parseInt(document.getElementById("second-integer").value);
  var addedNumber = 0;
  var answer = firstInteger;
  var remainder = 0
  if (firstInteger < 0 || secondInteger < 0) {
    document.getElementById("loop").innerHTML = "Please input a positive integer!"
    }
  
    // process
    if (firstInteger > 0 && secondInteger > 0) {
    while (answer >= secondInteger) {
      addedNumber = addedNumber + 1;
      answer = answer - secondInteger;
    }
  }
  
    if (answer == 0) {
    remainder = 0
    } else if (answer != 0)
    remainder = answer + secondInteger

  // output
  if (firstInteger > 0 && secondInteger > 0)
  document.getElementById("answer").innerHTML = irstInteger + " ÷ " + secondInteger + " = " + addedNumber + " The remainder is " + remainder;
}