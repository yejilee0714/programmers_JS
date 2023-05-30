function solution(array, n) {
    let closet = array[0];
    let minDiff = Math.abs(n - closet);
    for(let i=0; i<array.length; i++){
        const diff = Math.abs(n - array[i]);
        if(minDiff > diff){
            closet = array[i];
            minDiff = diff;
        }
    }
    return Math.min(...array.filter(num => Math.abs(n - num) === minDiff))
}