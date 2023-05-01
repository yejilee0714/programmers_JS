function solution(num_list) {
    var answer = [];
    let a = 0;
    let b = 0;
    // for(let i = 0; i < num_list.length ; i++){
    //     (num_list[i] % 2 == 0)? a += 1 : b += 1;
    //     answer=[a , b];
    // }
    num_list.forEach((item)=>{
        (item % 2 == 0)? a+=1 : b+=1;
        answer = [a, b];
    })
    return answer;
}