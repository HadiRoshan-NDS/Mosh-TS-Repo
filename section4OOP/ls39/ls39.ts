class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  walk() {
    console.log("Walking...");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("Taking a test...");
  }
}

// let student = new Student(1, "Teo", "Morningstar");

class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

class Principal extends Person {
  override get fullName() {
    return "Principal " + super.fullName;
  }
}

let teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);

printNames([
  new Student(1, "Teo", "Morningstar"),
  new Teacher("Mosh", "Hamedani"),
  new Principal("Mohammad", "Azadi"),
]);

function printNames(people: Person[]) {
  for (let person of people) console.log(person.fullName);
}
