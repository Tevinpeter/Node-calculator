import {
    add,
    subtract,
    multiply,
    divide
} from "./calculations.js";

const operationData = new Map([
    [
        "+",
        {
            minInputs: 2,
            maxInputs: Infinity,
            action: add
        }
    ],
    [
        "-",
        {
            minInputs: 2,
            maxInputs: 2,
            action: subtract
        }
    ],
    [
        "*",
        {
            minInputs: 2,
            maxInputs: Infinity,
            action: multiply
        }
    ],
    [
        "/",
        {
            minInputs: 2,
            maxInputs: 2,
            action: divide
        }
    ]
]);

export const getOperationData = (operation) => {
    return operationData.get(operation);
};

export function executeOperation(operationData, numbers) {
    return operationData.action(numbers);
}