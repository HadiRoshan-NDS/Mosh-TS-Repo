function echo<T extends number | string>(value: T): T {
  return value;
}
echo("hi");

function echo2<T extends { name: string }>(value: T): T {
  return value;
}
echo2({ name: "a" });

interface Person {
  name: string;
}
function echo3<T extends Person>(value: T): T {
  return value;
}
echo("hi");

class People {
  constructor(public name: string) {}
}
class Customer extends People {}
function echo4<T extends People>(value: T): T {
  return value;
}
echo4(new Customer("a"));
