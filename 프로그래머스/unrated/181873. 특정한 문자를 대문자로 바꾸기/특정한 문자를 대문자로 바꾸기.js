function solution(my_string, alp) {
    var answer = '';
    [...my_string].forEach((item)=>{
        if(item == alp){
            answer+=item.toUpperCase();;
        }else{
            answer+=item;
        }
    })
    return answer;
}