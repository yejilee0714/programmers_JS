function solution(numbers) {
    numbers.sort((a, b)=> a-b)
    let num1 = numbers[0] * numbers[1];
    let num2 = numbers[numbers.length-1] *numbers[numbers.length-2]; 
    return (num1 > num2) ? num1 : num2;
}
