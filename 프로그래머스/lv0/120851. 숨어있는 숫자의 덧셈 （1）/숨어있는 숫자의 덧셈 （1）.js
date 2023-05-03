function solution(my_string) {
    var answer = 0;
    return my_string.split("").filter((item) => !isNaN(item)).reduce((acc, cur) => Number(acc)+Number(cur), 0)
}