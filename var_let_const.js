/**
 * VAR
 * 1.its is used to define a variable
 * 2.it has function  scope but no block scope
 * 2.it is hoisted
 */

function fu(){
    var i= 50
    // output excecute be
    console.log(i)
}
fu()
// output error
// console.log(i)
console.log("-----------")

{
    var a=90
   
}
console.log(a)
console.log("-------------")
// hoisted
console.log(m)
var m=234
console.log(m)


/**LET 
1.no hoister
2.its also has block scope
*/
// console.log(j)
// let j=10

{
    let name = "bhawna"
    console.log(name) // Output: bhawna
}
console.log(name) // Output: ReferenceError: name is not defined

/** CONST
1.its is used to define a constant variable
2.its also has block scope
3.its value cannot be changed
scope is exactly  same as let 
it coud not change variable 

*/
