// for loop
console.log("---for loop-------")
for(var i=1;i<20;i++){
    console.log(" WELCOME MY GITHUB")
}
console.log("------While loop--------")

// while loop
var i=1
while(i<11){
    console.log("hello javascipt")
    i++;
}
console.log("--- continue ---")
// continue iteration
for( var a=1;a<=50;a++){
    if(a%2 !=0){
        continue;

    }
    console.log(a)
}
console.log("--- Nested loop---")
for( var a=1;a<10;a++){
    for(var b=1;b<10 ;b++){
        if(a%2 !=0){
         continue
    }
  
    console.log(a)

    }
    
}
console.log("---break----")
// ---Break
for( var i=0;i<10;i++){
    
        if(i==9 ){
          break;

    }
    console.log("hey"+i )
}
