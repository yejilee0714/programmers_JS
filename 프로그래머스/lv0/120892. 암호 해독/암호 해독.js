function solution(cipher, code) {
    var answer = [];
    [...cipher].forEach((item, index)=>{
        if((index+1) % code === 0)
            answer.push(item)
    })
    return answer.join("");
}