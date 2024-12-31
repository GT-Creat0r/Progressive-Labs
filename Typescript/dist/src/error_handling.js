"use strict";
function divide(a, b) {
    if (b === 0) {
        return { success: false, error: "Division by zero is not allowed." };
    }
    return { success: true, value: a / b };
}
function handleResult(result) {
    if (result.success) {
        console.log("Success:", result.value);
    }
    else {
        console.error("Error:", result.error);
    }
}
const result1 = divide(10, 2);
const result2 = divide(10, 0);
handleResult(result1);
handleResult(result2);
//# sourceMappingURL=error_handling.js.map