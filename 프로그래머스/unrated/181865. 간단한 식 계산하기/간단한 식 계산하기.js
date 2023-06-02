function solution(binomial) {
    var answer = 0;
    let list = binomial.split(' ');
    let a = Number(list[0]);
    let b = Number(list[2]);
    (list[1] === '+') ? answer = a + b : (list[1] === '-') ? answer = a - b : answer = a * b
    return answer;
}