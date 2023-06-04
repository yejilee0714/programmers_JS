function solution(n) {
    let num = n ** (1/2);
    return (Number.isInteger(num) === true) ? (num+1) ** 2 : -1 ;
}