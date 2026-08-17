// Import the readline tool from Node.js
import readline from "node:readline/promises";

// Import the keyboard (stdin) and screen (stdout)
import { stdin as input, stdout as output } from "node:process";

// Create ONE interface that every function in this file can reuse
const rl = readline.createInterface({
    input,
    output
});

// Reads and validates the user's chosen operation
export async function readOperation() {

    // The valid operations our calculator understands
    const validOperations = new Set([
        "+",
        "-",
        "*",
        "/",
        "quit"
    ]);

    // Keep asking until the function can fulfil its promise
    while (true) {

        // Ask the user for an operation
        const operation = await rl.question(
            "Choose an operation (+, -, *, /, quit): "
        );

        // Normalize the input
        const normalizedOperation =
            operation.trim().toLowerCase();

        // Validate the operation
        if (validOperations.has(normalizedOperation)) {
            return normalizedOperation;
        }

        // Tell the user what went wrong
        console.log(
            "Invalid operation. Please try again.\n"
        );
    }



}

async function getInput(question) {
    const input = await rl.question(question);
    return input;
}

function validate(input) {
    const number = Number(input.trim());

    if (Number.isNaN(number)) {
        return null;
    }

    return number;
}

export async function collectInputs(operationData) {
    const numbers = [];

    const min = operationData.minInputs;
    const max = operationData.maxInputs;

    while (numbers.length < max) {

        const input = await getInput(
            "Enter a number (press Enter on an empty line when finished): "
        );

        if (input.trim() === "") {

            if (numbers.length >= min) {
                return numbers;
            }

            console.log(`Please enter at least ${min} numbers.`);
            continue;
        }

        const number = validate(input);

        if (number === null) {
            console.log("Please enter a valid number.");
            continue;
        }

        numbers.push(number);
    }

    return numbers;
}