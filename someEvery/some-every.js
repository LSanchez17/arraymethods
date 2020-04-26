/*
Write a function called hasOddNumber which accepts an array and returns true 
if the array contains at least one odd number, otherwise it returns false.
console.log(hasOddNumber([2,2,2,2,2,4]));
*/
const hasOddNumber = (arr) => {
  return arr.some(val => val % 2 !== 0);
}

/*
Write a function called hasAZero which accepts a number and returns true if 
that number contains at least one zero. Otherwise, the function should return false
console.log(hasAZero(3332123213101232321));
*/
const hasAZero = (num) => {
  let numRay = Array.from(num.toString()).map(Number);

  return numRay.some((val) => {
    return val === 0;
  })
}

/*
Write a function called hasOnlyOddNumbers which accepts an array 
and returns true if every single number in the array is odd. If any 
of the values in the array are not odd, the function should return false. 
console.log(hasOnlyOddNumbers([1,3,5,7])); // true
*/
const hasOnlyOddNumbers = (arr) => {
  return arr.every((val) => {
    if(val % 2 === 0){
      return false;
    }
    else{
      return true;
    }
  });
}

/*
Write a function called hasNoDuplicates which accepts an
array and returns true if there are no duplicate values 
(more than one element in the array that has the same value as another). 
If there are any duplicates, the function should return false.
console.log(hasNoDuplicates([1,2,3]));
*/
const hasNoDuplicates = (arr) => {
  return arr.every(val => arr.indexOf(val) === arr.lastIndexOf(val));
}

/*
Write a function called hasCertainKey which accepts an array of objects and a key, 
and returns true if every single object in the array contains that key. 
Otherwise it should return false.
Examples:
    
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]   
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/
const hasCertainKey = (arr, key) => {
  return arr.every(val => val.hasOwnProperty(key));
}

/*
Write a function called hasCertainValue which accepts an array of objects and a key,
and a value, and returns true if every single object in the array contains that 
value for the specific key. Otherwise it should return false.

Examples    
*/

const hasCertainValue = (arr, key, searchValue) => {
  return arr.every((val) => {
    console.log(`The obj: ${val} abastract`);   
    console.log(`The true object ${val[key]}`);
    if(val[key] === searchValue){
      return true;
    }
    else{
      return false;
    }
  })
}


var arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
    {title: "Instructor", first: 'Matt', last:"Lane"}, 
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
]

console.log(hasCertainValue(arr,'title','Instructor')) // true
console.log(hasCertainValue(arr,'first','Elie'));