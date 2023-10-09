function solution(n, slicer, num_list) {
    var answer = [];
    (n === 1) ? answer = num_list.slice(0, slicer[1]+1) : (n === 2) ? answer = num_list.slice(slicer[0]) : (n === 3) ? answer = num_list.slice(slicer[0], slicer[1]+1) : answer = num_list.slice(slicer[0], slicer[1]+1).filter( (_,i) =>  i % slicer[2] === 0);
    return answer;
}