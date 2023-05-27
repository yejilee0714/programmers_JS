function solution(keyinput, board) {
    // var answer = [a, b];
    let a = 0;
    let b = 0;
    let area_a = Math.floor(board[0] / 2);
    let area_b = Math.floor(board[1] / 2);
    keyinput.forEach((item)=>{
        switch(item){
            case "left":
                if(!(a === -area_a)) a -= 1;
                break;
                
            case "right":
                if(!(a === area_a)) a += 1;
                break;
                
            case "up":
                if(!(b === area_b)) b += 1;
                break;
                
            case "down":
                if(!(b === -area_b)) b -= 1;
                break;
        }
    })
    
    
    return [a, b];
}