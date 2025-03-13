// Arithmetic operators
console.log("additional =",2+6)
console.log("subtractionm =",2-6)
console.log("multiplication =",2*6)
console.log("remainder =",2586%3)
console.log("expontenstiol means power of =",4**4)

//Assignment
var a = "="
console.log("assignment -",a)

// post increment 
var i=9
console.log(i++)

console.log(i)
console.log("------")

// pre increment
var i =9
console.log(++i)
console.log(i)

// --RELATIONAL 

// equality 
console.log(1==1)  //Double equal too

console.log(1== "1")//one confussion thing is 1 is  string so why the value of true ?
//Triple equal
console.log(1==="1")  //Strict check 
console.log("---------")
//  inEquality 
console.log(1!="1")
console.log(1!=="1")
console.log(1!==1)

// comparative 
console.log(4>5) //less
console.log(4<5) //greater
console.log(4>=4) //less than equal to
console.log(7<=10) //greter than equal
console.log("-------------")
// Logical operator
/**
 * --AND--
 * T && T =TRUE
 * T && F = FALSE
 * F && F= FALSE
 * F && T = FALSE 
 * 
 * only one condition is equal than the output of true
 */

console.log(5>3 && true)
console.log(6<3 && true)


/**
 * --OR--
 * T || T = TRUE
 * T || F = TRUE
 * F || T = TRUE
 * F || F = FALSE 
 * 
 * only one condition is equal than the output of true
 */

console.log(4>8 || false)
console.log(6<9 || true)
/**
 * --XOR--
 * 
 * T ^ F = TRUE
 * F ^ T = TRUE
 * F ^ F = FALSE
 * T ^ T = FAlSE 
 
 * only one condition is equal than the output of true
 */
console.log(true ^ true)
console.log(false ^ false)
console.log(false ^ true)
console.log(true ^ false)

//Bitwise operator
console.log(10 & 6)
console.log(10 & 9)






