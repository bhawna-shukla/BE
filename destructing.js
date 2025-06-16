// destructing an array
const num = [1,2,3,4,5];
const [a,b,c,d]=[5,4,3,[5,8]]
console.log(b)
console.log(c)
console.log(a)
console.log('-----------');
console.log(d)
console.log('**************')
// destructing an object
const data= {
    name:'bhawna',
    class:'8th',
    rollno:4569235,
    address:{
        city:"lucknow",
        state:"uttar pradesh"
    }
}
console.log(data)

const {name,rollno,address:{city,state}}=data
console.log(name)
console.log(rollno)
console.log(state) 