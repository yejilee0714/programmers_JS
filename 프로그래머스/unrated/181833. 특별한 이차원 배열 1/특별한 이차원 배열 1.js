function solution(n) {
    let array = Array.from({length: n}, () => new Array(n).fill(0))
    for(let i = 0; i < n ; i++){
        array[i][i] = 1;
    }
    
    return array;
}