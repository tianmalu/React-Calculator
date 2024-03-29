import Big from "big.js";

export default function operate(numberOne, numberTwo, operation) {
    const one = Big(numberOne || "0");
    const two = Big(numberTwo || (operation === "÷" || operation === "×" ? "1" : "0"));
    if (operation === "+") {
        return one.plus(two).toString();
    }
    if (operation === "-") {
        return one.minus(two).toString();
    }
    if (operation === "×") {
        return one.times(two).toString();
    }
    if (operation === "÷") {
        if (two === "0") {
            alert("/0? Error.");
            return "0";
        } else {
            return one.div(two).toString();
        }
    }
    throw Error(`Unknown Operator “${operation}” `);
}