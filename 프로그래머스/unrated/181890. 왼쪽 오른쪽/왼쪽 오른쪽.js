function solution(str_list) {
    var answer = [];
    
    let left = str_list.indexOf("l") === -1 ? Infinity : str_list.indexOf("l");
    let right = str_list.indexOf("r") === -1 ? Infinity : str_list.indexOf('r')
    
    let isLeft;
    
    if(left === Infinity && right === Infinity) return answer;

    if(left < right) {
        isLeft = true;
    } else {
        isLeft = false;
    }
    
    if(isLeft) {
        for(let i = 0; i < left ; i++){
            answer.push(str_list[i]);
        }
    } else {
        for(let j = right+1 ; j < str_list.length ; j++ ) {
            answer.push(str_list[j]);
        }
    } 
    return answer;
}