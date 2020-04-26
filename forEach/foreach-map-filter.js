const doubleValues = (arr) =>{
  let newArr = [];
  arr.forEach(val => newArr.push(val*2))
  return newArr;
}
//console.log(doubleValues([1,2,3,4,5]));

const onlyEvenValues = (arr) =>{
  let newArr = [];
  arr.forEach((value) => {
    if(value % 2 === 0){
      newArr.push(value);
    }
  });
  return newArr;
}
//console.log(onlyEvenValues([1,2,3,4,5,6]));

const showFirstAndLast = (arr) =>{
  let newArr = [];
  arr.forEach(value => newArr.push((value.charAt(0) + value.slice(-1))));
  return newArr;
}
//console.log(showFirstAndLast(['list', 'tesd', 'true']));

const addKeyAndValue = (arr,key,value) =>{
  arr.forEach(item => item[key] = value)
  return arr;
}
//console.log(addKeyAndValue([{name:'Tim'},{name:'ted'}],'testing','passed'));

const vowelCount = (str) =>{
  let strToArr = str.split(''); 
  let vowels = 'aeiou';
  let newObj = {};

  strToArr.forEach((piece) => {
    let lower = piece.toLowerCase();
    if(vowels.indexOf(lower) !== -1){
      if(newObj[lower]){
        newObj[lower]++;
      }
      else{
        newObj[lower] = 1;
      }
    }
  });
  return newObj;
}
//console.log(vowelCount('tesesese'))

const doubleValuesWithMap = (arr) => {
  return arr.map(val => val*2);
}
//console.log(doubleValuesWithMap([1,2,3]))

const valTimesIndex = (arr)=> {
  return arr.map((value,i) => {
    return value*i;
  })
}
//console.log(valTimesIndex([1,3,4]));

const extractKey = (arr, key) => { 
  return arr.map((item) => {return item[key]});
}
// console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}], 'name'));

const extractFullName = (arr) => {
  return arr.map((value) => {return value.first + ' ' + value.last});
}

const filterByValue = (arr, key) => {
  return arr.filter(item => item.hasOwnProperty(key))
}
//console.log(filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner'))
//Had to use solution to figure out last test here, dont quite get the [0]?
const find = (arr, searchValue) => {
  return arr.filter(value => value === searchValue)[0];
}
//console.log(find([1,2,3,4,5], 3))

const findInObj = (arr, key, searchValue) => {
  return arr.filter(item => item[key] === searchValue)[0];  
}
//console.log(findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true))

const removeVowels = (str) => {
  let newStr = str.split('');
  let vowels = 'aeiou';
  let output = [];

  newStr.filter((value) => {
    let lowered = value.toLowerCase();
    if(vowels.indexOf(lowered) === -1){
      output.push(lowered);      
    }
  })  
  return output.join('');
}
//console.log(removeVowels('TIM'))

/*
Write a function called doubleOddNumbers which accepts an array and 
returns a new array with all of the odd numbers doubled 
(HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

const doubleOddNumbers = (arr) => {
  return arr.filter(value => value % 2 !== 0).map(newVals => newVals * 2);
}
//console.log(doubleOddNumbers([1,2,3,4,5]))
