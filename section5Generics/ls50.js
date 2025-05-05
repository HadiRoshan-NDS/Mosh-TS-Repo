"use strict";
function echo(value) {
    return value;
}
echo("hi");
function echo2(value) {
    return value;
}
echo2({ name: "a" });
function echo3(value) {
    return value;
}
echo("hi");
class People {
    constructor(name) {
        this.name = name;
    }
}
class Customer extends People {
}
function echo4(value) {
    return value;
}
echo4(new Customer("a"));
