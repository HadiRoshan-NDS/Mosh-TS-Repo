"use strict";
let speed = null;
let ride = {
    //Falsy: (undefined, null, '', false, 0)
    //Nullish coalescing operator, the value can be null or undefined
    speed: speed !== null && speed !== void 0 ? speed : 30
};
/* With this implementation (speed || 30) if the user wants to use 0 as
the value for speed, 0 is going to be ignored since it's a falsy value
and 30 is going to be used instead. */
/* To check for null, there are two ways we can code:
speed: speed !== null ? speed : 30
The other way is written in the code above */
