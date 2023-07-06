function solution(a, d, included) {
    var answer = 0;
    let list = [a];
    for(let i = 1; i < included.length ; i++){
        list.push(a+(d*i));
    }
    for(let i = 0; i < included.length ; i++){
        (included[i]) ? answer+=list[i] : false;
    }
    return answer;
}