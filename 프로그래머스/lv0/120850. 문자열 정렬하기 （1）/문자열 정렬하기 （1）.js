function solution(my_string) {
    return [...my_string].filter((item)=>!isNaN(item)).sort((a,b)=>a-b).map(n => Number(n));
}