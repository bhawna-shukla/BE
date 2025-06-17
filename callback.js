function greet(name,callback){
    const greeting="hello"+" "+name;
    callback(greeting)
    
}

function displayGreeting(message){
    console.log(message)
}
greet("bhawna shukla",displayGreeting)

console.log("--------------------")
// callback hell | pyramid  of doom
