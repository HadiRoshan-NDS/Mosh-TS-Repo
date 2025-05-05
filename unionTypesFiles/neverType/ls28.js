"use strict";
function reject(message) {
    throw new Error(message);
}
function processEvents() {
    while (true) {
        //Reads a message from a queue
    }
}
processEvents();
console.log('Hello world');
/* This line never gets executed because the function never returns, or
we could say the function is an infinite loop. This is why we can
annotate the return type of this function as never.  */
/* The reject function is just like the processEvents function, it never
returns so the code after that will never get executed. */
