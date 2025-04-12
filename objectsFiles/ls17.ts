let employee = { id: 1 };
/* If we define an object like this: let employee = { id: 1 };
we cannot add other info to it later, because the compiler will
assume (infer) its type as is and you cannot modify its type. So
for example if you want to add this code: employee.name ='Mosh',
the compiler is going to complain. */

/* Another thing we can do is define the type and specify its 
properties, then we would have to assign values to each of the 
properties while declaring them to avoid problems, however, we 
can make a field optional by adding a '?' but we have to be 
careful about it */
let student: {
    id: number,
    name: string,
    graduate: (date: Date) => void
} = { 
    id: 1, 
    name: 'Teo',
    graduate: (date: Date) => {
        console.log(date);
    }
 };
student.name = 'Mosh';

/* We can also make a property read-only by adding the readonly
keyword in the beginning of it. We can also define functions for
an object, we have to define its parameters and their types and
and the type of the return value (like graduate). We also have to
define the functions for each object or else we'll get an error */

/* The problem with this approach of defining objects is that for
each new instance we would have to repeat the structure, so we will
learn another way of defining them in the next section. */

