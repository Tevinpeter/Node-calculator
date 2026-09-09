import { readOperation, collectInputs } from "./input.js";
import { getOperationData, executeOperation } from "./operation.js";
import { addHistory } from "./history.js";
import {displayResult} from "./display.js";

const operation = await readOperation();

const operationData = getOperationData(operation);

const numbers = await collectInputs(operationData);

const result = executeOperation(operationData, numbers);

displayResult(result);

addHistory(operation, numbers, result);