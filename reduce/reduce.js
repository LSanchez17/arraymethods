/*
Write a function called extractValue which accepts an array of objects 
and a key and returns a new array with the value of each object at the key.
*/
const extractValue = (arr, key) => {
  return arr.reduce((accum, nextVal) => {
    accum.push(nextVal[key])
    return accum;
  },[]);
}
//const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
//console.log(extractValue(arr,'name')) // ['Elie', 'Tim', 'Matt', 'Colt']

/*
Write a function called vowelCount which accepts a string and returns an object 
with the keys as the vowel and the values as the number of times the vowel appears 
in the string. This function should be case insensitive so a lowercase letter and 
uppercase letter should count
*/

/*
  We  iterate through the new string array, and then while iterating, we lowercase the 
  array and run it against the vowels we are looking for using indexOf
  The character we compare to it is called by using nextVal, which is the first one
  in the new array.  Then if it matches the vowels we create an object.
  We have a second parameter, an empty {} which gets added to by the retun value of
  the accumulator.  The accum becomes an object through declaration with a value
  once declared, we reiterate through the function
*/
const vowelCount = (str) => {
  let strArr = str.split('');
  let vowel ='aeiou';

  return strArr.reduce((accum, nextVal) => {
    let lowered = nextVal.toLowerCase();
    if(vowel.indexOf(lowered) !== -1){
      if(accum[lowered]){
        accum[lowered]++;
      }
      else{
        accum[lowered] = 1;
      }
    }
    return accum;
  }, {})
}
//console.log(vowelCount('Elie')) // {e:2,i:1}
//vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};

/*
Write a function called addKeyAndValue which accepts an array of objects and
returns the array of objects passed to it with each object now including the 
key and value passed to the function.
*/
const addKeyAndValue = (arr, key, value) => {
  return arr.reduce((accum, nextVal, indx) => {
    //console.log(nextVal) --> Gives first object in array
    //We run through each current values next index, and access that particular 
    //object at that index, adding a new property key with value value;
    accum[indx][key] = value;
    //console.log(nextVal[key]) ==> gives us the value of instructor
    return accum;
  }, arr)
}
//const arrg = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];  
//console.log(addKeyAndValue(arrg, 'title', 'Instructor')) 
//[
//  {title: 'Instructor', name: 'Elie'}, 
//  {title: 'In/structor', name: 'Tim'}, 
//  {title: 'Instructor', name: 'Matt'}, 
//  {title: 'Instructor', name: 'Colt'}
//]

/*
Write a function called partition which accepts an array and a callback and 
returns an array with two arrays inside of it. The partition function should 
run the callback function on each value in the array and if the result of the 
callback function at that specific value is true, the value should be placed in 
the first subarray. If the result of the callback function at that specific value 
is false, the value should be placed in the second subarray. 
  
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

const partition = (arr, callBackFn) => {
  return arr.reduce((beginning, next) => {
    if(callBackFn(next)){
      beginning[0].push(next);
    }
    else{
      beginning[1].push(next);
    }
    return beginning;
  }, [[],[]]);
}
//The following could be used within the partition function
const isEven = (val) => { 
  return val % 2 === 0;
}

const isOdd = (val) => {
  return val % 2 !== 0;
}

const longerThan = (val, charLenght, equalizer) => {
  if(equalizer === '>'){
    return val > charLenght;
  }
  if(equalizer === '<'){
    return val < charLenght;
  }
  else{
    throw 'No comparison chosen!';
  }
}