function solution(num_list) {
    let a = 0;
    let b = 0;
    num_list.forEach((item)=>{
        (item % 2 == 0)? a+=1 : b+=1;
    })
    return [a, b];
}