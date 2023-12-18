function solution(rank, attendance) {
    let list = [];
    let answer = []; 
    for(let i = 0; i < attendance.length ; i++){
        if(attendance[i]) list.push(rank[i]);
    }
    list.sort((a, b)=> a - b);
    return 10000 * rank.indexOf(list[0]) + 100 * rank.indexOf(list[1]) + rank.indexOf(list[2]);
}