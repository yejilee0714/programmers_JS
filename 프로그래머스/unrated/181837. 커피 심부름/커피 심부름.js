function solution(order) {
    var answer = 0;
    order.forEach( x => x.includes("anything") || x.includes("americano") ? answer += 4500 : answer += 5000 );
    return answer;
}