function solution(money) {
    var answer = [];
    let a = Math.floor(money / 5500);
    let b = 0;
    
    if(money % 5500 ===0){
        b = 0;
        answer = [a, b];
    } else{
        b = Math.floor(money % 5500);   
        answer = [a, b];
    }
    
    return answer;
}