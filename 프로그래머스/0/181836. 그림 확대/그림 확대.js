function solution(picture, k) {
    var answer = [];
    picture.forEach( a => {
        let repeat = [...a].map(a => a.repeat(k)).join('')
        for(let i = 0 ; i < k ; i++) { 
            answer.push(repeat)
        }
    })
    return answer;
}