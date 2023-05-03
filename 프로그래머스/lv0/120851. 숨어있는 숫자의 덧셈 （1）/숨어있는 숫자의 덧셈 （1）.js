function solution(my_string) {
    var answer = 0;
    [...my_string].forEach(function(item){
        (!isNaN(parseInt(item)))? answer += parseInt(item) : answer += 0; })
    return answer;
}