function solution(my_string, queries) {
    var answer = '';
    let letter = my_string.split('');
    
    for (let i = 0 ; i < queries.length; i++){    
        let start = queries[i][0];
        let end = queries[i][1];
        let num = end - start;
        
        answer = letter.slice(start, end+1).reverse();
        
        letter.splice(start, num+1);
        letter.splice(start, 0, ...answer);
    }
    return letter.join('');
}