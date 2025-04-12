let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;

let level;
//Here we haven't initialized the variable so its type would be any

let lessonCount = 2;
let author = "Hadi Roshan";

/* If we want to limit the values we can use for a variable, we
should use a literal type. So instead of annotating it with a
number we should define it as a literal (exact, specific) */
let quantity: 50 | 100 = 50;

/* For this concept we can also create a type alias, eg: */
type Ethnicity = "Asian" | "White" | "Black";
let ethnicity: Ethnicity = "Asian";
//These two types used above are Literal Types

/* JS arrays are dynamic so each element can be of different type
to avoid encountering problems while using these arrays we can\
explicitly determine the type of arrays' elements in TS */
let ages: number[] = [23, 28]
/* However, in this case we don't need to explicitly declare the
type of the array because all of its elements are numbers */

/* In TS we have intellisence, so when we try to acess the numebrs
the compiler is going to suggest the methods available for numbers which
didn't exist in JavaScript */
ages.forEach(n => n.toString)

// We can use a Tuple for defining users with numbers, like this:
let user: [number, string] = [1, 'Mosh']
/* Here if we access the first element, we'll see all of the 
methods for a number and if we access the second element, we'll
see all of the methods for a string*/

/* Here we want to define an enum, we use PascalCase for naming.
When we assign elements to enum, the compiler will assign numbers
from 0 above to them. We can also assign custom numbers; we can 
also use string values instead of numbers. */
enum Size { Small, Medium, Large }
let mySize: Size = Size.Medium;
console.log(mySize);
//If we add constant before enum, the js code will be concise
 