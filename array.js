arr = [1,2,2,3,4,5,6,7,8,9,10]
console.log(arr);
console.log(typeof arr);
// empty array
let arr1= new Array();
console.log(arr1); // Output: []
console.log("-----------");
let arr2 = [];
console.log(arr2); // Output: []
console.log("-----------");

// indexing
arr3 = [1,2,3,4,5,6,7,8,9,10]
console.log(arr3[5]); // Output: 6
console.log(arr3[0]); // Output: 1
console.log(arr3[9]); // Output: 10
console.log(arr3[10]); // Output: undefined
console.log(arr3[-1])
console.log("-----------");
// push
arr4 = [1,2,3,4,55,6];
console.log(arr4);
arr4.push(56,89,78,);
console.log(arr4);
console.log('---------')

// unshift
arr4.unshift(10,56,78);
console.log(arr4); // Output: [ 10, 56, 78, 1, 2, 3, 4, 55, 6, 56, 89, 78 ]
console.log('---------')
// removing element 
// pop method
arr4.pop();
console.log(arr4);
console.log('---------')
