"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discr = b**2-4*a*c;
  //return arr;
   if (discr < 0) {
    arr = [];
  } else if (discr == 0){
    let root = -b/(2*a);
     arr.push(root);     
  } else if (discr > 0) {
    let oneroot = (-b + Math.sqrt(discr))/(2*a);
    let tworoot = (-b - Math.sqrt(discr))/(2*a);
     arr.push(oneroot);
     arr.push(tworoot);     
  }
  return arr;
}
 
solveEquation(1, 2, 0);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let perc = (percent/100)/12;
  let dody = amount - contribution;
  let pay = (dody * (perc + (perc / (((1 + perc)**countMonths) - 1))))*countMonths;
    
  return(Number(pay.toFixed(2)));
}

calculateTotalMortgage(10, 0, 10000, 36)

// percent - процентна€ ставка
// contribution - сумму первоначального взноса +
// amount - сумма кредита +
// countMonths - срок (количество мес€цев) +