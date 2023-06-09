function solution(a, b) {
    var answer = 0;
    let num = a.toString() + b.toString();
    (Number(num) >= (2 * a * b)) ? answer = Number(num) : answer = (2 * a * b)
    return answer;
}