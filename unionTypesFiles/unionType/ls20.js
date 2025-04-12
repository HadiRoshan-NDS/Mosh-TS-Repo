"use strict";
function kgToLbs(weight) {
    /* Normally if we want to access wight, the compiler doesn't
    know if it's a number or a string so it will display function
    that they have in common, we can use the narrowing technique */
    if (typeof weight == 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
/* The weight parameter is a union type so we can initialize it int
two ways, either with a number or with a string */
//either like this:
kgToLbs(10);
/* or like this:
kgToLbs('10kg'); */
