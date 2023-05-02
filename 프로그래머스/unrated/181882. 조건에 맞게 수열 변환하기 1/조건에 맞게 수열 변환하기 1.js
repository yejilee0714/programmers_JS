// function solution(arr) {
//     var answer = [];
//     [...arr].forEach((item)=>{
//         if(item<50 && item % 2 !==0){
//             answer.push(item*2)
//         }else if(item>= 50 && item % 2 === 0){
//             answer.push(item/2)
//         }else{
//             answer.push(item)
//         }
//     })
//     return answer;
// }

function solution(arr) {
    let answer = [];
    for (let i = 0; i<arr.length; i++){
        (arr[i]>=50 && arr[i] % 2===0) ? answer.push(arr[i]/2) : (arr[i]<50 && arr[i] % 2!==0) ? answer.push(arr[i]*2) : answer.push(arr[i])
    }
    return answer;
}