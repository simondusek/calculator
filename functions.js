export const Calculate = {
    addition: function(exp1, exp2) {
        return exp1 + exp2;
    },
    subtraction: function(exp1, exp2) {
        return exp1 - exp2;
    },
    multiplication: function(exp1, exp2) {
        return exp1 * exp2;
    },
    division: function(exp1, exp2) {
        if (exp2 === 0) {
            throw new Error("Err. Division by zero!");
        }
        return exp1 / exp2;
    },
    power: function(exp1, exp2) {
        return exp1 ** exp2;
    },
    root: function(exp1, exp2) {
        return exp1 ** (1/exp2);
    },
}


