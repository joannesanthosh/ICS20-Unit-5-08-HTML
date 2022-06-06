/* Created by: Joanne Santhosh
 * Created on: May 2022
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
  var total = 0
  var firstInteger = parseInt(document.getElementById("first-integer").value);
  var secondInteger = parseInt(document.getElementById("second-integer").value);
  var remainder = firstInteger
  if (firstInteger < 0 || secondInteger < 0) {
    document.getElementById("loop").innerHTML = "Please input a positive integer!"
    }

    // process
    if (firstInteger > 0 && secondInteger > 0) {
    while (remainder >= secondInteger) {
      remainder = remainder - secondInteger;
      total++
    }
  } else if ((firstInteger < 0) && (secondInteger < 0)) {
    remainder = Math.abs(remainder)
    secondInteger = Math.abs(secondInteger)
    while (remainder >= secondInteger) {
      remainder = remainder - secondInteger
      total++
    }
  } else {
    remainder = Math.abs(remainder)
    secondInteger = Math.abs(secondInteger)
    while (remainder >= secondInteger) {
      remainder = remainder - secondInteger
      total++
    }
    total = -Math.abs(total)
  }

  // output
  if (firstInteger > 0 && secondInteger > 0)
  document.getElementById("answer").innerHTML = firstInteger + " ÷ " + secondInteger + " = " + total + " The remainder is " + remainder
}