function solution(strArr) {
    var answer = [];
    strArr.forEach((item)=>{
        if(item.indexOf('ad') === -1) answer.push(item);
    })
    return answer;
}