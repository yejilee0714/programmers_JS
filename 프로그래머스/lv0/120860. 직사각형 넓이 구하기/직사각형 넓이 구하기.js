function solution(dots) {
    let list = dots.sort((a, b)=> a[0]-b[0]);
    let width = Math.abs(list[1][0] - list[2][0]);
    let height = Math.abs(list[0][1] - list[1][1])
    return width * height;
}