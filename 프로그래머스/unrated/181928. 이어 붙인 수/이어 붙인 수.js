function solution(num_list) {
    var answer = ["", ""];
    num_list.forEach((item)=>{
        (item % 2 !== 0) ? answer[0]+=item : answer[1] += item;
    })
    return Number(answer[0])+ Number(answer[1]);
}