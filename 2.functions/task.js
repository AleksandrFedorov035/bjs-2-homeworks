function getArrayParams(...arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  avg = sum / arr.length;
  return { min: Math.min(...arr), max: Math.max(...arr), avg: parseFloat((Math.round(avg * 100) / 100).toFixed(2))};
}

function summElementsWorker(...arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let difference = Math.max(...arr) - Math.min(...arr);
  if(difference == -Infinity) {
    difference = 0;
  }
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0, 
  sumOddElement = 0, 
  difference = sumEvenElement - sumOddElement;
  for(let i = 0; i < arr.length; i++) {
    if (i % 2) {
      sumEvenElement += i;
    } else {
      sumOddElement += i;
    }
  }
  return difference;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0,
   countEvenElement = 0,
   division = sumEvenElement / countEvenElement;
  for(let i = 0; i < arr.length; i++) {
    if(i % 2) {
      sumEvenElement += i;
      countEvenElement++;
    }
  }
  return division;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for(let i = 0; i < arrOfArr.length; i++) {
    func += arrOfArr[i];
  }
  if(func > Infinity) {
    func = Infinity;
  } 
  return maxWorkerResult;
}
