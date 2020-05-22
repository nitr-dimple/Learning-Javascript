//isArray() Method Example
// isArray() is the method that takes a variable that returns true or false whether the variable is an array or not

var string1 = "Javascript";
var object1 = {'name':'Javascript'};
var array1 = [0,1,2,3,4];

var testString = Array.isArray(string1);
var testObj = Array.isArray(object1);
var testArray = Array.isArray(array1);

console.log(testString);
console.log(testObj);
console.log(testArray);


//length
//Returns the length of the array

var arrayLen = array1.length;
console.log(arrayLen);

//for loop

var sum = 0;
for(var i=0; i< array1.length; i++)
{
    sum += array1[i];
}

console.log(sum);

//indexOf() method Example
//Returns Number of first/last index of matching parameter

var arr = [1,2,3,1,2,3,1,2,3];
var indexOfarr =  arr.indexOf(3);   //returns the first index

console.log(indexOfarr);

//It also take second parameter that specifies the starting position
var indexOfarr =  arr.indexOf(3,2);   //Starts from 2
console.log(indexOfarr);

var indexOfarr =  arr.indexOf(3,2);   //Starts from 2
console.log(indexOfarr);

//To find the last index
var indexOfarr =  arr.lastIndexOf(3);   
console.log(indexOfarr);

var indexOfarr =  arr.lastIndexOf(3,6);    
console.log(indexOfarr);

var indexOfarr =  arr.indexOf(4);   // Returns -1 as index doesn't exists
console.log(indexOfarr);


//push() and pop() Example
// Used to add and remove an elements from the array

var arr2 = [1,2,3];
arr2.push('one');   // Value will be pused at the end of the array
console.log(arr2);

arr2.push('Two');
console.log(arr2);

arr2.pop();   //This will remove the element from the end of an array
console.log(arr2)

//unshift() and shift()
//This are similar to push and pop but instead of removing an element from the end of an array, it will insert and remove from the begining of the array

var arr3 = [1,2,3];
arr3.unshift('one');  //This will add one at the begining of the array
console.log(arr3);

arr3.unshift('two');
console.log(arr3);

arr3.shift();  //This will remove element from the begining of the array
console.log(arr3);

arr3.shift();  //This will remove element from the begining of the array
console.log(arr3);