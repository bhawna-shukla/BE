// name function declared
function name(){     
    console.log("hello bhawna shukla")   
    // function body content
}
// call argument
name()
console.log("-------------")
// funstion sum the number
function sum(a,b){
    return a+b;
}
console.log(sum(3,5))
console.log("-----------")

function greet(name) {
    console.log("namaste, " + name + "!");
  }

  greet("india");
  console.log("----------------")

  function func(){
    console.log(arguments)
  }
  func(1,2,3,4)

//   --ARROW FUNCTION--
/**Fun with parameter and no return */
var stu=() => console.log("hello world")

stu()

var sum = (a,b) => a+b 
console.log(sum(4,6))

var sub = (a,b) => a-b 
console.log(sub(8,6))
/**fun with parameter and return */
 var process =(a,b) => {
    console.log("need to process")
    return a*b
 }
 console.log(process(5,6))

//  --ANONYMOUS
(function(){
    console.log("hello dear")
})()
