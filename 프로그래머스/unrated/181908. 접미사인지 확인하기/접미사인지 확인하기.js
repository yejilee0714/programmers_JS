function solution(my_string, is_suffix) {
    var answer = 0;
    for(let i = 0; i < my_string.length ; i++){
        let list = [...my_string].splice(i, my_string.length).join('');
        if(list === is_suffix) {
            answer = 1;
            break;
        } else {
            answer = 0;
        }
    }
    return answer;
}