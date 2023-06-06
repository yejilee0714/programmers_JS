function solution(x) {
    let number = 0;
    x.toString().split('').forEach((item)=>{
        number += Number(item);
    })
    return (x % number === 0) ? true : false;
}