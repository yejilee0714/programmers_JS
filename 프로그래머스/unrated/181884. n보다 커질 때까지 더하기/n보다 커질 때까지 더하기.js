function solution(numbers, n) {
    // var answer = 0;
    // numbers.forEach((item)=>{
    //     if(answer <= n){
    //         answer+=item;
    //     }
    // })
    // return answer;
    return numbers.reduce((curr, num) => (curr <= n ? curr + num : curr), 0);

}