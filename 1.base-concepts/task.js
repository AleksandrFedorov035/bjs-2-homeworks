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
  percent = percent / 100;
  let bet = percent / 12,
  credit = amount - contribution,
  payOnMonth = credit * (bet + (bet / (((1 + bet)**countMonths) - 1))),
  payForAllCredit = payOnMonth * countMonths,
  number = payForAllCredit.toFixed(2);
  return parseFloat((Math.round(number * 100) / 100).toFixed(2));
}