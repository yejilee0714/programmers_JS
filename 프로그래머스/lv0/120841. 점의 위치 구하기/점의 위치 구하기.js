function solution(dot) {
    let first = dot[0]
        let second = dot[1]
        if(0 < first && 0 < second){
            return 1
        } else if (0 > first && 0 < second){
            return 2
        } else if (0 > first && 0 > second){
            return 3
        } else return 4
//     let result = 0;
    
//     if(dot[0] > 0){
//         (dot[1] > 0) ? result = 1 : result = 4;  
//     } else{
//         (dot[1] > 0) ? result = 2 : result = 3;
//     }
//     return result;
}