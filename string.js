// string


let name="bhawna shukla"
let age=23  
let city="delhi"
console.log(name,age,city);

// accessing  character based on index
console.log('character at index 5:',name[8]);
name[2]="p"; // strings are immutable
console.log(name); // Output: bhawna shukla

// length of the string
console.log("length of string:",name.length); // Output: 13'
// string concatenation
let fullName = name ;
// console.log("full name:", fullName); // Output: bhawna shukla from delhi
console.log(fullName + " is " + age + " years old."); // Output: bhawna shukla  is 23 years old.

// string methods
console.log("toUpperCase:",name.toUpperCase()); // Output: bhawna shukla
  
// character at any index str[i]
console.log(name.charAt(3)); // Output: w


// string slicing
console.log(fullName.slice(2))
// Output: awna shukla
console.log(fullName.slice(2, 5)); // Output: awn
console.log(fullName.slice(-3)); // Output: la
console.log(fullName.slice(-2,-5)); // Output: undefined


// indexOf
console.log(name.indexOf('b'))
let word = "--shukla "
console.log(word)
console.log(word.trim("--")); // Output: shukla

// split
let sentence = "Hello, how are you?";
let words = sentence.split("");

console.log(words); // Output: [ 'Hello,', 'how', 'are', 'you?' ]
console.log("-----------")
let we = sentence.split(" ");
console.log(we); // Output: [ 'Hello,', 'how', 'are', 'you?' ]