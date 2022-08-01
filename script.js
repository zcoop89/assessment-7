// #1 Sum Zero
function sumZero(array) {
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length; i++) {
      if (array[j] + array[i] === 0) {
        return true;
      }
    }
  }
return false
}
const arr = sumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);

// #2 Unique Characters
function findUnique(str) {
  let uniq = "";

  for (let i = 0; i < str.length; i++) {
    if (uniq.includes(str[i]) === false) {
      uniq += str[i];
    }
  }
  return uniq;
}

// #3 Pangram Sentence


function isPangram(string){
  let strArr = string.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  for (let i = 0; i < alphabet.length; i++) {
    if(strArr.indexOf(alphabet[i]) < 0){
      return false;
    }
  }
  return true;
}

// #4 Longest Word
function findLongestWord(str) {
  let arr = str.split(" ");

  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    let valStr = arr[i].length;

    if (valStr > max) {
      max = valStr;
    }
  }
  return max;
}
