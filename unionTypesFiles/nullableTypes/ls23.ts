function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}

greet(undefined)

/* When we want to pass in null as the parameter for greeat, like:
greet(null); the compiler will stop us because in the tsconfig file
"strictNullChecks" is set to true by default which we can change,
but technically we shouldn't do that. */

/* To avoid the application from crashing, we should use an if
statement to say that if a name was not entered we should do sth 
other than what we do for when they enter a name. In order to be
able to enter null or undefined as the parameter, we should use
union data type using the or operator. */


