const user = {
    name :'Bhawna',
    age : 22,
    city : 'Lucknow'
}
console.log(user);
// accessing the data
console.log(user.age);
console.log(user['name']);
// adding data of the object
user.country='India';
user['continent'] ='Asia'
console.log(user);
// delete the data in object
delete user.country
delete user['continent']
console.log(user);
console.log('---------');

let person={
    name:'Bhawna shukla',
    age : 22,
    address : {
city:"Lucknow",
state:"uttar pradesh",
pincode:221660
    }
}

// for (let key in person){
//     console.log(key)
// }
console.log('--------');
for(let key in person){
    console.log(key,'=',person[key])
}
console.log('----')
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
console.log(person)
console.log('======')
const new_person = Object.assign({
    id:10236,
   
},
person,
{
    role:'developer'
})
console.log(new_person)