function solution(sides) {
    var answer = 0;
    sides.sort((a, b)=> a - b);
    
    for(let i = sides[1]-sides[0] + 1; i<= sides[1] ; i++){
        answer++;
    }
    
    for(let i = sides[1] + 1; i< sides[0]+ sides[1]; i++){
        answer++;
    }
    return answer;
}