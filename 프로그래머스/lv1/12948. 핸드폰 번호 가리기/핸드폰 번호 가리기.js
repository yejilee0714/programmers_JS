function solution(phone_number) {
    var answer = '';
    for(let i = 0; i < phone_number.length-4; i++){
        answer+='*';
    }
    for(let j = phone_number.length-4; j< phone_number.length; j++){
        answer+= phone_number[j];
    }
    return answer;
}