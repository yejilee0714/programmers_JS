function solution(my_string) {
    let list = my_string.split('');
    var answer = [];
    for(let i = 0 ; i < list.length ; i++){
        answer.push(list[(list.length-1) - i]);
    }
    return answer.join('');
}