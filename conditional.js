// if ans else condition
var a=21
if(a % 2==0){
    console.log("EVEN")
}else{
    console.log("Odd")
}
console.log("After if ")
console.log("------------")
// ternary operators
20%2 ==0 ? console.log("even") : console.log("odd")
console.log("----------")
// nested loop
var a=21
if(a>=20){
    if(a<=20){
        console.log("yes is equal")  
    }
   else{
    console.log("not is equal")
   }
}else{
    console.log("equal")

}
// ternary operator
a>=20 ? a<=21 ? console.log("yes is equal") : console.log("not is equal") :     console.log("equal")

// Switch 
var fruit = "strawvery"

switch(fruit){
    case "apple":
        console.log("it is an apple")
        break
        case "mango":
            console.log("it is a mango")
            break
            default :
            console.log("not a valid fruit")
}