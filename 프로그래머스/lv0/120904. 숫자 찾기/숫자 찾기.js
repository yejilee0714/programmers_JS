function solution(num, k) {
    let list = num.toString();
    return list.includes(k) ? list.indexOf(k) + 1 : -1;
}