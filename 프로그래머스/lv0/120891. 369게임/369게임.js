function solution(order) {
    return [...String(order)].filter(item=> ["3", "6", "9"].includes(item)).length;
}