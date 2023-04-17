function solution(array) {
    array.sort((a, b) => a - b);
    var answer = Math.floor((array.length)/2)
    return array[answer];
}