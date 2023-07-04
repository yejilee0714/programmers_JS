function solution(my_string, overwrite_string, s) {
    var answer = '';
    let word1 = my_string.slice(0,s);
    let word2 = my_string.slice(s+overwrite_string.length, my_string.length);

    return word1+overwrite_string+word2;
}