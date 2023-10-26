function solution(my_string, s, e) {  
    let word = my_string.split("").slice(s, e + 1).reverse().join("");
    
    return my_string.substring(0, s) + word + my_string.substring(e + 1);
}