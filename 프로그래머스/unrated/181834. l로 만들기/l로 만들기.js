function solution(myString) {
    var answer = '';
    [...myString].forEach((item)=>{
        (item < 'l') ? answer += 'l' : answer += item;
    })
    return answer;
}