function solution(my_string, m, c) {
    var answer = '';
    
    while(my_string.length){
        answer += my_string[c-1];
        my_string = my_string.slice(m);
    }
    return answer;
}