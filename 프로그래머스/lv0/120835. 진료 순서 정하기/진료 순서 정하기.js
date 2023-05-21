function solution(emergency) {
    let list = [...emergency].sort((a, b)=> b - a);
    return emergency.map(v=> list.indexOf(v)+1);
}