function solution(quiz) {
    var answer = [];
    
    quiz.forEach((item)=> {
        let items = item.split(' ');
        
        let num1 = Number(items[0]);
        let num2 = Number(items[2]);
        
        let result = 0;
        
        (items[1] === "+") ? result = num1 + num2 : result = num1 - num2;
        
        (result === Number(items[4])) ? answer.push("O") : answer.push("X");
    })
    return answer;
}