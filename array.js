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

// shift method
arr4.shift();
console.log(arr4); // Output: [ 56, 78, 1, 2, 3, 4, 55, 6, 56, 89 ] 
console.log('---------')
// concat
let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = a1.concat(a2);
console.log(a3); // Output: [ 1, 2, 3, 4, 5, 6 ]
console.log('---------')
// size of the array
console.log(a3.length); // Output: 6
console.log('---------')
// indexOf
console.log(a3.indexOf(3)); // Output: 2
console.log('-----------')
// convert array to string
char_arr = ['b', 'h', 'a', 'w', 'n', 'a', ' ','s','h','u','k','l','a'];
console.log(char_arr.join());
console.log(char_arr.join(''));
console.log(char_arr.join(""));
console.log('=----------');
console.log(char_arr.toString("-"));
// slice method
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums.slice(3));
console.log(nums.slice(3,5));
console.log('--------')


// splice method, which modifies  the given array  
console.log('==========')
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(number.splice(3));
console.log(number) 
// Output: [ 1, 2, 3 ]  
console.log('==========')
// reverse ,method
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(num.reverse()); // Output: [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
console.log('-----------')
// indexof method
let arr5 = [ 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
console.log(arr5.indexOf(11)); // Output: 5
console.log('---------')
//sort method
let arr6 = [7,6,5,4,3,2,1];
arr6.sort();
console.log(arr6); // Output: [ 1, 2, 3, 4, 5, 6, 7 ] 
console.log('----------')

let arr7 = [6,18,14,7,19,2,1];
arr7.sort((a, b) => a - b);
console.log(arr7); // Output: [ 1, 2, 4, 6, 7, 8, 9 ]
console.log('---------')
// you solve the sort method of reverse  element like a descending order
let a = [6,18,14,7,19,2,1]
a.sort((a, b) => b - a);
console.log(a);
console.log('---------')
