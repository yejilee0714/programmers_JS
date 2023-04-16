function solution(dot) {
    let result = 0;
    
    if(dot[0] > 0){
        (dot[1] > 0) ? result = 1 : result = 4;  
    } else{
        (dot[1] > 0) ? result = 2 : result = 3;
    }
    return result;
}