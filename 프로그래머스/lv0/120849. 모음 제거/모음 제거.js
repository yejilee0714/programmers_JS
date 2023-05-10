function solution(my_string) {
    // var answer = '';
    // for(let i = 0; i < my_string.length ; i++){
    //     if(my_string[i] !== 'a' && 
    //        my_string[i] !== 'e' && 
    //        my_string[i] !== 'i' && 
    //        my_string[i] !== 'o' && 
    //        my_string[i] !== 'u'){
    //         answer += my_string[i];
    //     }
    // }
    // return my_string.replace(/[aeiou]/g,'');
    return [...my_string].filter(item => item !== 'a' && item !== 'e' && item !== 'i' && item !== 'o' && item !== 'u').join('')
}