function solution(money) {
    let a = Math.floor(money/5500)
    return [a, money-a*5500];
}