var _a;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
var customer = getCustomer(1);
/* We originally wrote this code:
if (customer !== null && customer !== undefined), but there is
another thing we can do in TS which is optional property access
operator, which gets executed if property is available */
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
