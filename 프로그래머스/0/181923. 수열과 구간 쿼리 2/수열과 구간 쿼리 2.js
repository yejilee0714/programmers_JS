function solution(arr, queries) {
    var answer = [];
    for(let i = 0 ; i < queries.length ; i++) { 
        let list = (arr.slice(queries[i][0], queries[i][1]+1))
        let nums = list.filter(a => a > queries[i][2])
        answer.push((nums.length > 0) ? Math.min(...nums) : -1)
    }
    return answer;
}