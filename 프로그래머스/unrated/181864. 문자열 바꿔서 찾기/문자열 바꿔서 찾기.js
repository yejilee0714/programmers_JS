function solution(myString, pat) {
    return (myString.replace(/A|B/g, (item) => (item ==='A') ? 'B' : 'A').indexOf(pat) !== -1) ? 1: 0
}