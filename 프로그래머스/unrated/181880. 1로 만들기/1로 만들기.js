function solution(num_list) {
    var answer = 0;
    for(num of num_list){
        let n = num;
        
        while(n !== 1){
            if(n % 2 === 0){
                n /= 2;
            } else {
                n = (n-1) / 2;
            }
            answer++;
        }
    }
    return answer;
}