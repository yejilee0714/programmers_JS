function solution(strArr) {
    var answer = 0;
    let counts = {};
    
    for( let i = 0 ; i < strArr.length ; i++){
        let word = strArr[i];
        let wLength = word.length;
        
        (counts[wLength] === undefined) ? counts[wLength] = 1 : counts[wLength]++; 
        
        answer = Math.max(answer, counts[wLength]);
    }
    
    return answer;
}