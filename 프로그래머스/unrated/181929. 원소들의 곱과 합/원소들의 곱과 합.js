function solution(num_list) {
    var answer = 0;
    let add = 0;
    let mul = 1;
    for(let i = 0; i< num_list.length ; i++){
        ((add += num_list[i])**2) > (mul*=num_list[i]) ? answer = 1 : answer = 0;
    }
    return answer;
}