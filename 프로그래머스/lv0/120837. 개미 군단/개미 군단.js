function solution(hp) {
    // var answer = 0;
    let five = Math.floor(hp / 5);
    let three = Math.floor((hp - five * 5) / 3);
    let one = hp- (five * 5) - (three * 3);
    return five + three + one;
}