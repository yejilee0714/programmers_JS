function solution(n) {
    var answer = 1;
    for(let i = 1; i <= n/2 ; i++){
        let temp = n;
        let num = i;
        while(temp > 0) {
            temp -= num++;
            if(!temp) answer++;
        }
    }
    return answer;
}