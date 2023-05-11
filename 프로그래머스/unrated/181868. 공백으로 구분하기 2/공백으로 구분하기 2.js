function solution(my_string) {
    var answer = [];
    let new_list = my_string.split(" ");
    new_list.forEach((item)=>{
        if(item !==""){
            answer.push(item)
        }
    })
    return answer;
}