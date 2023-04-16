function solution(array, n) {
    let answer = 0;
    for(let i = 0; i <array.length ; i++){
        (array[i] == n) ? answer += 1 : answer += 0;
    }
    return answer;
}