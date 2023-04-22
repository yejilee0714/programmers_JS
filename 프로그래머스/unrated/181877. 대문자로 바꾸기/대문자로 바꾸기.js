function solution(myString) {
    var answer = '';
    for(let i = 0; i< myString.length ; i++){
        if(myString[i] === myString.toUpperCase()){
            answer += myString[i];
        }else{
            answer += myString[i].toUpperCase();
        }
    }
    return answer;
}