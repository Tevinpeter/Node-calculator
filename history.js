const history = [];

export function addHistory(operation, numbers, result) {
    history.push({
        operation,
        numbers,
        result
    });
}

export function getHistory() {
    return [...history];
}

export function getLastResult() {
    if (history.length === 0) {
        return null;
    }

    return history[history.length - 1].result;
}

export function clearHistory() {
    history.length = 0;
}