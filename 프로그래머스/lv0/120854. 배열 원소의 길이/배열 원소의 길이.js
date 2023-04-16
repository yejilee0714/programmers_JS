function solution(strlist) {
    let word = [];
    for(let i = 0; i <= strlist.length-1 ; i++){
        word.push(strlist[i].length);
    }
    return word;
}