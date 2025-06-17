function outerFn(){
    let outerVar =   "I am from the outer"
    function innerFn(){

    console.log(outerVar)
    }
    return innerFn
}
let fn = outerFn()
fn()
console.log("-----------------")
function customerCounter(){
    let count=0 
    return function(){
   count++
   console.log("new customer count is", count )
    }
    
}
let counter = customerCounter()
counter()
counter()
counter()
counter()