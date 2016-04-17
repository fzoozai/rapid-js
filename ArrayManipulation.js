/**
 * Created by fzoozai on 17/04/16.
 */

/* The power of Array's */

// (using an Array as a stack) in order to fill out an array with numerical values use the default method 'push(PARAMETER)'
var ratings = [];
ratings.push(5);
ratings.push(2,4);
console.log(ratings.length);

// removes the last element of an array, and returns that element
console.log(ratings.pop());

// removes the first element of an array, and returns that element
console.log(ratings.shift());

// adds new elements to the beginning of an array, and returns the new length
var t1 = [];
t1.push(5);
t1.push(2,4);
console.log(t1.unshift(3));

// in order to use Date_functions_fundamentals: have a look at developer.mozilla.org/Date MDN

/* REGEX (regular expressions) */
// use test function to prove whether the sequence matches or not
var blogText = "fzoozai I Am";
var pattern = new RegExp('zoo', 'g'); /* the shorthand notation would be: var pattern = /zoo/g; (g represents the flag (global))*/
console.log(pattern instanceof RegExp);
console.log(pattern.test(blogText));

var blogText2 = "RWTH Aachen";
var pattern = /WTH/g;
console.log(pattern.test(blogText2));

// use exec function to get a 3-Tuple ('pattern', indexOf 'pattern', input)
var blogText = "Hello Planet";
var pattern = /e/g;
var result = pattern.exec(blogText);
console.log(result);

// efficient code to loop trough every occurrence of the pattern
var blogText = "Hello my name is fzoozai";
var pattern = /o/g;
var result = pattern.exec(blogText);
while(result)
{
    console.log(result.index);
    result = pattern.exec(blogText);
}

// use match function to get an array with n_times the pattern
var blogText = "Today is a good day";
var pattern = /oo/g;
var result = blogText.match(pattern);
console.log(result);

// use match function to get an array with n_times the pattern
// now we have a different flag 'gi'
// the 'g' stands for global and the 'i' stand for case insensitive
// here the match function does not distinct between lowercase and uppercase letters.
var blogText = "TOOday is a good day";
var pattern = /oo/gi;
var result = blogText.match(pattern);
console.log(result);

/*Want to learn more about REGEX in JS? Have a look at developer.mozilla.org/Regex MDN */


/* Let's get started with Objects, JSON, Prototypes */
// create a new Object and use ._properties
var project = new Object();
project.name = 'Project X';
project.securityLevel = 16;
project.updateDueDate = function () {
    return true;
};
console.log(project.updateDueDate());

// create an object by using JSON

var project = {};
project.name = 'THE FLASH';
console.log(project.name);

var project = {
    name: 'Barry Allen',
    securityLevel: 17,
    updateDueDate: function () {
        return true;
    }
};
console.log(project.name);