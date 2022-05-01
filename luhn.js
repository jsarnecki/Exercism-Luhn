
export const valid = (n) => {

  if (n.trim().length < 2) {
    return false;
  }
  
  let numArr = n.split("");

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === " ") {
      // Remove " " as it converts to 0 with Number()
      numArr.splice(i, 1);
    } else if (!Number.isInteger(Number(numArr[i]))) {
      // Check for non-numbers
      return false;
    }
    numArr[i] = Number(numArr[i]);
    // Convert all strings to numbers
  }

  for (let i = numArr.length - 2; i >= 0; i -= 2) {
    // Loop backwards by 2 thru nums
    let x = numArr[i] * 2;
    if (x > 9) {
      numArr[i] = x - 9
    } else {
      numArr[i] = x;
    }
  }

  const count = numArr.reduce((a, b) => a + b);

  if (count % 10 === 0) {
    return true;
  } else {
    return false;
  }

};
