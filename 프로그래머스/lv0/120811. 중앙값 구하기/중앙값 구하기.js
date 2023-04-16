function solution(array) {
    array.sort((a, b) => a - b);
    var answer = parseInt((array.length)/2)
    return array[answer];
}