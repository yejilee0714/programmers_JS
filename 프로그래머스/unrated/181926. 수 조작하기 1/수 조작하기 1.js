function solution(n, control) {
    var answer = n;
    [...control].forEach((item)=>{
        (item === "w") ? answer += 1 : (item === "s") ? answer -= 1 : (item === "d") ? answer += 10 : answer -= 10;
    })
    return answer;
}