function solution(arr1, arr2) {
    var answer = 0;
    let arr1L = arr1.length;
    let arr2L = arr2.length;
    if(arr1L < arr2L) answer = -1;
    else if(arr1L > arr2L) answer = 1;
    else if(arr1L = arr2L){
        let sum1 = arr1.reduce((acc, cur)=> acc+cur, 0);
        let sum2 = arr2.reduce((acc, cur)=> acc+cur, 0)
        sum1 < sum2 ? answer = -1 : sum1 > sum2 ? answer = 1: answer = 0;
    }
    return answer;
}