import { readOperation, collectInputs } from "./input.js";
import { getOperationData, executeOperation } from "./operation.js";

// Get the operation chosen by the user
const operation = await readOperation();

const operationData = getOperationData(operation);

const numbers = await collectInputs(operationData);

const result = executeOperation(operationData, numbers);

console.log(result);