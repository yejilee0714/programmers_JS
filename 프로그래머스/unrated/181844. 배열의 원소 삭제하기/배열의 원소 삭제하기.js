function solution(arr, delete_list) {
    var answer = [];
    [...arr].forEach((item)=>{
        if(delete_list.indexOf(item) === -1){
            answer.push(item);
        }
    })
    return answer;
}