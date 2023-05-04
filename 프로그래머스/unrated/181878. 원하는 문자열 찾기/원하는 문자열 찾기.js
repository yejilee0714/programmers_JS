function solution(myString, pat) {
    let word= pat.toUpperCase();
    return (myString.toUpperCase().indexOf(word) !== -1) ? 1 : 0 ;
}