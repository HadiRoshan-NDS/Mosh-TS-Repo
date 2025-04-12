/* To properly annotate our functions, we should determine the 
type of the return value that we're going to specify in the 
function's body after the parentheses */
function calculateTax(income: number): number {
    if (income < 50_000)
        return income * 1.2;
    return income * 1.3;

}

