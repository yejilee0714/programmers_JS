function solution(numbers) {
    let word = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"] 
    
    word.forEach((item, index)=>{
        numbers= numbers.replaceAll(item, index);
    })
    return Number(numbers);
}