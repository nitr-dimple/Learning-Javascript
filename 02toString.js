// toString() Example

var arr = ['This', 1, 'time'];
var str = arr.toString();  //This will  return a string join by comma
console.log(str); 

//forEach()
var arr1 = [1,2,3,4,5,6,7];
console.log("Original Array: " + arr1.join(', '));

function timesTen(element, index, array)
{
    array[index] = element * 10;
}
arr1.forEach(timesTen);
console.log("After: " + arr1.join(', '));


var arr2 = [
    {
        name: 'Ram',
        age: '50'
    },
    {
        name: 'Lakshman',
        age: '48' 
    }
    
];

function listPeople(element, index, array)
{
    console.log("Person: " + (index + 1));
    console.log("Name: " + element.name);
    console.log("Age: " + element.age);
}

arr2.forEach(listPeople);

//reverse()
var arr3 = [1,2,3,4,5];
console.log("Original Array: " + arr3.join(', '));

arr3.reverse();
console.log("Reverse Array: " + arr3.toString());

//concat()

var arr4 = ['a', 'b', 'c'];
var arr5 = ['d', 'e', 'f'];

var arrConcat = arr4.concat(arr5);
console.log("Concated Array: " + arrConcat);

var arrConcat2 = arr4.concat(1,2,3, ['x','y','z']);
console.log("Concated Array: " + arrConcat2);


//join()
// joins elements of an array into a single string

var arr5 = [12,23,34,45];
var string1 = arr5.join();  //by default it will join with comma separated
console.log(string1);

var string1 = arr5.join(''); 
console.log(string1);

var string1 = arr5.join('.'); 
console.log(string1);

//slice()
//Used to return a portion of an array

var arr6 = [1,2,3,4,5,6,7,8,9];
var sliced = arr6.slice(2,5);  //takes to parameter, begining index and last index, beginning index element is included into sliced array but last index element is not included
console.log(sliced);


var sliced = arr6.slice(2);  
console.log(sliced);

var sliced = arr6.slice(-2);  //Last two element
console.log(sliced);

var sliced = arr6.slice(-4,-2);  //last 4th index to last 2nd index
console.log(sliced);

//splice()
//It is an array to alter an array by adding or deleting elements

var arr7 = ['Ram', 'Lakshman', 'Bharat', 'Shratrugny'];
console.log("Original Array: " + arr7);
 
//deleting Element
var deleted = arr7.splice(2,2); //The first parameter is the index from where to start deletion and second is number of elements to be deleted and it will return the deleted elements
console.log("After deleting element: " + arr7);
console.log("Deleted Element: " + deleted);

//Adding Element
var deleted = arr7.splice(2,0,'Shratrugny');  // 0 means not to delete any parameter  
console.log("After Inserting: " + arr7);
console.log("Deleted Element: " + deleted);

//Overwriting Element
var deleted = arr7.splice(2,1,'Bharat');
console.log("After Overwriting: " + arr7);
console.log("Deleted Element: " + deleted);

//sort()
//This sort method uses unicode method to sort the elements

var arr8 = [12,21,32,44,34,23,1,6,3];
arr8.sort();
console.log("Sorted array: " + arr8);
//output: Sorted array: 1,12,21,23,3,32,34,44,6

//For sorting, we use compare function to sort in other way
function sortNum(a, b)
{
    return a-b;
}
arr8.sort(sortNum);
console.log("Sorted array: " + arr8);

//Sorting String
var arr9 = ['Ram', 'Lakshman', 'bharat', 'Shratrugny'];
arr9.sort();   //Sort case sensitively
console.log("Sorted array: " + arr9);
//Output:  Lakshman,Ram,Shratrugny,bharat

function sortAlpha(a,b)
{
    var aLower = a.toLowerCase();
    var bLower = b.toLowerCase();
    if(aLower < bLower) return -1;
    if(aLower > bLower) return 1;
    return 0;
}

arr9.sort(sortAlpha); 
console.log("Sorted array: " + arr9);

//Sorting Objects

var arr10 = [
    {
        name: 'Ram',
        age: '50'
    },
    {
        name: 'Lakshman',
        age: '48' 
    },
    {
        name: 'bharat',
        age: '49' 
    },
    {
        name: 'Shratrugny',
        age: '48' 
    },
    {
        name: 'Shratrugny',
        age: '50' 
    }  
]; 

function listPeople(element, index, array)
{
    console.log("Person: " + (index + 1));
    console.log("Name: " + element.name);
    console.log("Age: " + element.age);
}

console.log("Original Array")
arr10.forEach(listPeople);

function sortNames(a,b)
{
    var aLower = a.name.toLowerCase();
    var bLower = b.name.toLowerCase();
    if(aLower < bLower) return -1;
    if(aLower > bLower) return 1;
    if(aLower == bLower)
    {
        return a.age - b.age;
    }   
}

arr10.sort(sortNames);
console.log("Sorted Array")
arr10.forEach(listPeople);

//filter()
//Runs every element of an array through a specified function

var arr11 = [21,23,54,12,32,51,45,23,7,9,3,6];
console.log("Original Array: " +arr11);

function numOver(element, index, array)
{
    return element>20;
}
var filteredArray = arr11.filter(numOver);
console.log("Filtered Array: " +filteredArray); 
 
//every()
//This checks whether every elements meet the criteria and returns a boolean value true or false

var arr12 = [21,23,54,12,32,51,45,23,7,9,3,6];
console.log("Original Array: " +arr12);

function isEvery(element, index, array)
{
    return element>10;
}
var passed = arr12.every(isEvery);
console.log(passed);

//some()
//It will return true if some of the element do meet the criteria
var arr13 = [21,23,54,12,32,51,45,23,7,9,3,6];
console.log("Original Array: " +arr13);

function isSome(element, index, array)
{
    return element>10;
}
var passed = arr13.some(isSome);
console.log(passed);

//reduce() or reduceRight()
//This will have a previous value and currentvalue
//If previous value is not specified,  it will consider the value one index after it and next time previous value will be the return value by the 1st index

var arr14 = [1,2,3,4];
console.log("Original Array: " +arr14);

function addValues(previous, current, index, array)
{
    return previous + current;
}

var res = arr14.reduce(addValues);
console.log(res);

var arr15 = ['a', 'b', 'c', 'd', 'e'];
var res = arr15.reduce(addValues);
console.log(res);

var res = arr15.reduceRight(addValues);
console.log(res);

var arr16 = [
    {
        name: 'Ram',
        age: 50
    },
    {
        name: 'Lakshman',
        age: 48 
    },
    {
        name: 'bharat',
        age: 49 
    },
    {
        name: 'Shratrugny',
        age: 48
    },
    {
        name: 'Shratrugny',
        age: 50 
    }  
]; 
function totalAge(previous, current)
{
    return previous.age + current.age;
}
var res = arr16.reduce(totalAge);
console.log(res);
//This will return NaN age initially two ages will be added to 98.
//Now the previous value will be 98 and doesn't have any age member 
//This can be solved by passing previous value to 0

function totalAge1(previous, current)
{
    return previous + current.age;
}
var res = arr16.reduce(totalAge1,0);
console.log(res);

//map()
//This will add functionality to every element in the array and return  the mapped array

var arr17 = [100,200,300,400,500];
console.log("Original Array: " +arr17);

function addTax(element)
{
    return '$' + (element * 1.06).toFixed(2);
}
 
var mapped = arr17.map(addTax);
console.log("After mapped: " +arr17);
console.log(mapped);

var arr18 = ['Ram', 'Lakshman', 'bharat', 'Shratrugny'];
function toUpper(element)
{
    return element.toUpperCase();
}
var mapped = arr18.map(toUpper);
console.log(mapped);
