function solution(my_string) {
    var answer = [];
    let list = [...my_string]
    for(let i = 0; i < list.length ; i++){
        answer.push(list.slice(i, list.length).join(''));
    }
    return answer.sort();
}