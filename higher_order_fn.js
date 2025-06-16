function operation(operationfn,a,b){
    return operationfn(a,b)
}
function add(a,b){
    return a+b

}
let result =  operation(add,5,6)
console.log(result)