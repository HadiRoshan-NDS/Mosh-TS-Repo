"use strict";
var _a;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
/* We originally wrote this code:
if (customer !== null && customer !== undefined), but there is
another thing we can do in TS which is optional property access
operator, which gets executed if property is available */
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
/* Optional element access operator is useful when working with
arrays. Imagine we have a customer array, if an element of the
array is null we cannot access it so we use customers?.[0] to
make sure that the customer exists */
//We also have the optional call operator with the same syntax
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//This piece of code will get executed only if log is refrencing 
// an actual function, otherwise we'll get undefined
