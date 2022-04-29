
export const valid = (n) => {

  if (n.trim().length < 2) {
    return false;
  }
  
  const numArr = n.split("");
  for (const num of numArr) {
    if (!Number.isInteger(Number(num))) {
      return false;
    }
  }
  //if isNumber() false, return false
  //strings 1 or less === false

  
  //checks digits from right - reverse?
  //split into array, remove spaces
  
  //Double every 2nd number, if they equal over 9, subtract 9
  //Now add all the numbers together, if it is divisible by 10, true, else false
};
