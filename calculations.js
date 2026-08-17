export function add(numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

export function subtract(numbers) {
    return numbers.slice(1).reduce(
        (result, number) => result - number,
        numbers[0]
    );
}

export function multiply(numbers) {
    return numbers.reduce((total, number) => total * number, 1);
}

export function divide(numbers) {
    return numbers.slice(1).reduce(
        (result, number) => result / number,
        numbers[0]
    );
}