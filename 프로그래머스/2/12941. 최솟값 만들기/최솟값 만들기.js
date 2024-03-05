function solution(A,B){
    var answer = 0;

    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    return A.reduce((sum, cur, i) => sum + cur * B[i], 0);
}