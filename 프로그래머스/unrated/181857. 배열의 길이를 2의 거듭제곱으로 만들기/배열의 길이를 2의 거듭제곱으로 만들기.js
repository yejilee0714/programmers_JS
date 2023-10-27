function solution(arr) {
  const length = arr.length;
  
  let targetLength = 1;
  while (targetLength < length) {
    targetLength *= 2;
  }
  
  const zerosToAdd = targetLength - length;
  
  return arr.concat(Array(zerosToAdd).fill(0));
}