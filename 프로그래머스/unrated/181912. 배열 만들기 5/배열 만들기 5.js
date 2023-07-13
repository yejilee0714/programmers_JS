function solution(intStrs, k, s, l) {
    var answer = [];
    // let len = k.toString().length;
    for(let i = 0; i < intStrs.length ; i++){
        let number = Number(intStrs[i].slice(s, s+l));
        if(number > k){
            answer.push(number);
        }
    }
    return answer;
}