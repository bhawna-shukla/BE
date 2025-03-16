// ---GLOBAL SCOPE variable--
var name ="bhawna"
console.log(name)

function func(){
  console.log(name)
}
func()
console.log("-------------")
// LOCAL scope/FUNCTION scope variable
function numc() {
    var num = 33
    console.log(num)
}
numc()
console.log("-------------")
// this is not define in local variablr scope
// console.log(num) 

// BLOCK SCOPE variable
{
    var x=10
    console.log(x)
}
console.log(x)
console.log("-------------")

