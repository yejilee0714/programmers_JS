function solution(arr) {
    var answer = [];
    let start = arr.indexOf(2);
    let last = arr.lastIndexOf(2);
    
    return (start !== -1) ? arr.slice(start, last+1) : [-1]
}