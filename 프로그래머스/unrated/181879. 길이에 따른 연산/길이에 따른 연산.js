function solution(num_list) {
    var answer = 0;
    let add = 0;
    let mul = 1;
    num_list.forEach((item)=>{
        if(num_list.length >= 11){
            add += item
            answer = add;
        }else {
            mul *= item;
            answer = mul            
        }    
    })
    // for(let i = 0; i < num_list.length ; i++){
    //     if(num_list.length >= 11){
    //         add += num_list[i]
    //         answer = add;
    //     }else {
    //         mul *= num_list[i];
    //         answer = mul            
    //     }    
    // }
    return answer;
}