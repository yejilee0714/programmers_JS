function solution(myString, pat) {
    let last = myString.lastIndexOf(pat);
    return myString.substring(0,last) + pat;
}