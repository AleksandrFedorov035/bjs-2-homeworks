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
  if(arr.length == 0) {
    return 0;
  }
  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  if(arr.length == 0) {
    return 0;
  }
  let sumEvenElement = 0, 
  sumOddElement = 0,
  difference = sumEvenElement - sumOddElement;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return difference;
}

function averageEvenElementsWorker(...arr) {
  if(arr.lenght == 0) {
    return 0;
  }
  let sumEvenElement = 0,
   countEvenElement = 0,
   division = sumEvenElement / countEvenElement;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return division;
}

function makeWork(arrOfArr, func) {
  const maxWorkerResult = 0;
  for(let i = 0; i < arrOfArr.length; i++) {
    func(sum(arrOfArr[i]));
    if(maxWorkerResult > sum(arrOfArr[i])) {
      maxWorkerResult = sum(arrOfArr[i]);
    }
  }
  return maxWorkerResult;
}