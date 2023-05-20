function solution(i, j, k) {
    var answer = 0;
    let count = 0;
    for( i ; i <= j ; i++){
        answer += i.toString();
    }
    let list = answer.split('');
    for(let a = 1; a < list.length ; a++){
        if (list[a] == k) count++;
    }
    return count;
}