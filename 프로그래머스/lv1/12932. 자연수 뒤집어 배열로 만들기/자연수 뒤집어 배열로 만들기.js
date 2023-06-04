function solution(n) {
    var answer = [];
    let list = n.toString().split('');
    for(let i = list.length-1; i >= 0; i--){
        answer.push(Number(list[i]));
    }
    return answer;
}