function solution(my_string) {
    let list = my_string.split(' ');
    var answer = parseInt(list[0]);
    
    for(let i = 1; i < list.length ; i++){
        if(list[i] === '+'){
            answer += parseInt(list[i+1])
        } else if(list[i] === '-') {
            answer -= parseInt(list[i+1])
        }
    }
    return answer;
}