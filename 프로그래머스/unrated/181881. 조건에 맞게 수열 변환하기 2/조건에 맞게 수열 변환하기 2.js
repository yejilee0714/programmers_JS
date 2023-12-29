function solution(arr) {
    var answer = 0;
    let preArr = arr;
    while(true) {
        let curArr = preArr.map(a => {
            if(a >= 50 && a % 2 === 0) return a / 2
            if(a < 50 && a & 2 !== 0) return a * 2 + 1
            return a
        })
    let sameArr = preArr.every((a, i) => a === curArr[i])
    if(sameArr) break;
        answer += 1;
        
        preArr = curArr;
    }
    return answer;
}