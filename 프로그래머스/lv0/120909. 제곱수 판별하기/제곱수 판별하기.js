function solution(n) {
    return (n**(1/2) % 1 === 0) ? 1 : 2;
}