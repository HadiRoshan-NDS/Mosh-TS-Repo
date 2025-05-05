"use strict";
let phone = document.getElementById('phone');
/* Some html elements have some values like value entered by the user,
but if we type phone and try to access value with a dot, we'll see that
it won't be suggested. With type assertion we can tell TS that we know
more about an element than the compiler. By adding HTMLInputElement after
as, we tell the compiler the type of the element. Now when we want to
access the methods for this element, we can see value suggested. Type
Assertion doesn't change the type, it just provides some information
for the compiler. Another way for doing the same thing is prefixing the
element access expression (document..) with <HTMLInputElement> */
