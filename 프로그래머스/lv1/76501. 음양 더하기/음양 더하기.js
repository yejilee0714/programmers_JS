function solution(absolutes, signs) {
    // var answer = 123456789;
    let answer = [];
    absolutes.forEach((item, index)=> {
        if(signs[index] === true){ answer.push(item)}
        else { answer.push(-item)};
    })
    let result = 0
    answer.forEach((item)=> result += item);
    return result;
}