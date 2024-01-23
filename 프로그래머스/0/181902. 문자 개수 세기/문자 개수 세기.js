function solution(my_string) {
    var answer = Array(52).fill(0);
    
    for(const char of my_string){
        if ('A' <= char && char <= 'Z') {
            answer[char.charCodeAt(0) - 'A'.charCodeAt(0)]++;
        } else if ('a' <= char && char <= 'z') {
            answer[char.charCodeAt(0) - 'a'.charCodeAt(0) + 26]++;
        }  
    }
    
    return answer;
}