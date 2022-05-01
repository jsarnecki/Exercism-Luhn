
export const valid = (n) => {
  //if isNumber() false, return false
  //strings 1 or less === false

  if (n.trim().length < 2) {
    return false;
  }
  
  let numArr = n.split("");

  

  console.log("first", numArr);
  
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === " ") {
      numArr.splice(i, 1);
    } else if (!Number.isInteger(Number(numArr[i]))) {
      return false;
    }
    numArr[i] = Number(numArr[i]);
  }
  
  //checks digits from right - reverse?
  //split into array, remove spaces
  
  console.log("second", numArr);

  for (let i = numArr.length - 2; i >= 0; i -= 2) {
    let x = numArr[i] * 2;
    if (x > 9) {
      numArr[i] = x - 9
    } else {
      numArr[i] = x;
    }
  }

  let count = 0;
  for (const num of numArr) {
    count += num;
  }

  console.log("third", numArr);
  console.log("count", count)

  if (count % 10 === 0) {
    return true;
  } else {
    return false;
  }


  


  //Double every 2nd number, if they equal over 9, subtract 9
  //Now add all the numbers together, if it is divisible by 10, true, else false
};
