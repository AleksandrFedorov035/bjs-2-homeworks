function getArrayParams(...arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  avg = sum / arr.length;
  return { min: Math.min(...arr), max: Math.max(...arr), avg: parseFloat(avg.toFixed(2))};
}

function summElementsWorker(...arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }
  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0, 
  sumOddElement = 0,
  difference;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return difference = sumEvenElement - sumOddElement;;
}

function averageEvenElementsWorker(...arr) {
  if(arguments.length === 0) {
    return 0;
  }
  let sumEvenElement = 0,
   countEvenElement = 0,
   division;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return division = sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for(let i = 0; i < arrOfArr.length; i++) {
    makeWork(func) += arrOfArr[i];
    const Result = makeWork(func);
    if(maxWorkerResult < Result) {
      maxWorkerResult = Result;
    }
  }
  return maxWorkerResult;
}