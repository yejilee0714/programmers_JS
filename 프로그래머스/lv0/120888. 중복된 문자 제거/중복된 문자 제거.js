function solution(my_string) {
    // var answer = '';
    return [...new Set(my_string)].join('');
}