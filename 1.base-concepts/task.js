"use strict"; 
function solveEquation(a, b, c) {
 let arr = []; 
 let discriminant = b**2 - 4*a*c; 
 let root;
 if (discriminant > 0) { 
    let secondroot; 
    secondroot = (-b - Math.sqrt(discriminant) )/(2*a);
    root = (-b + Math.sqrt(discriminant) )/(2*a);
    arr.push(root);
    arr.push(secondroot);
  } else if (discriminant == 0) {
    root = (-b / (2*a));
    arr.push(root);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = 2;
  countMonths = 12;

  Math.floor(Math.random() * percent);
  let credit = amount - contribution;
  let payOnMonth = credit * ((1 / 12 * percent) + ((1 / 12 * percent) / (((1 + (1 / 12 * percent))**countMonths) - 1)));
  let payForAllCredit = payOnMonth * countMonths;
  Math.round(payForAllCredit);
  return payForAllCredit;
}