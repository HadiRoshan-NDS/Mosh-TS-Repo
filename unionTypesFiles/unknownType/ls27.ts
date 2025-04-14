function render(document: unknown) {
    //Type narrowing
    if (typeof document === 'string') {
        document.toUpperCase();
    }
    // document.move()
    // document.fly()
}

/* The typeof operator only works with primitive types, if we want to 
check for custom types created by classes, we have to use instanceof
eg. document instanceof WordDocument */ 