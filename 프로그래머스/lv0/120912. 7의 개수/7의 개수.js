function solution(array) {
    var answer = 0;
    let list = array.join('').split('');
    list.forEach((item)=>{
        if(item === '7') answer+=1;
    })
    return answer;
}