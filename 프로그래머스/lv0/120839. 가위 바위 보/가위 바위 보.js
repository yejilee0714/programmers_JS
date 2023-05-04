function solution(rsp) {
    var answer = '';
    [...rsp].forEach((item)=>{
        (item === "0") ? answer += "5" : (item === "5") ? answer += "2" : answer += "0"
    })
    return answer;
}