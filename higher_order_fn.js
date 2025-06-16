function operation(operationfn,a,b){
    return operationfn(a,b)
}
function add(a,b){
    return a-b

}
let result =  operation(add,2,2)
console.log(result)
console.log("------------------")

function getGreetMethod(){
      return function(){
        console.log("hello budy!")
      }
}
let greetFn = getGreetMethod()

greetFn()
console.log('------------------')

// forEach
players = ["sachine","dhoni","rohit","virat"]
players.forEach((player)=>console.log(player))

// map - creation of new transformed array
arr = [1,2,3,4,5,6]
let cube_arr=arr.map(num => num**3)
console.log(cube_arr)
console.log("------------")
// filter
arr1 =[1,2,3,4,5,6,7,8,9,10,11,12,13]
even_num = arr1.filter((num=>num%2==0))
console.log(even_num)
console.log("-----------")
let ar = [1,2,4,5,6,7].reduce((cur,nex)=> cur+nex)
 console.log(ar)
 


