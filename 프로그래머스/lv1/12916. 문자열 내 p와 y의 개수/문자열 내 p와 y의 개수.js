function solution(s){
    var answer = true;
    let caseP = 0;
    let caseY = 0;
    let list = s.toUpperCase().split('');
    list.forEach((item)=>{
        (item === 'P') ? caseP += 1: (item === 'Y') ? caseY += 1: false;
    })
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    return (caseP === caseY) ? answer = true : answer = false;
}