//Write a for loop that will iterate from 0 to 10,
//it will multiply the number by 9
//and log the result (e.g. "2 * 9 = 18")
//Bonus: Use a nested for loop to show the tables for every
//multiplier from 1 to 10 (100 results total)

for (let j = 0; j <= 10; j++) {
  let k = j * 9;
  console.log(j + " * " + " 9 " + " = " + k);
}
console.log("")


//Write a while loop that starts counting from 5.
//Count up to (including) 50 and count only every fifth number
//Don' forget to log it

let i = 0;
while (i < 50) {
  console.log(i);
  i += 5;
}


//Write a function that takes an array of numbers as an argument.
//This function should return the first duplicate number in the array:
// For example: [2,7,5,9,8,7] should return 7;

function findDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        return arr[i];
      }
    }
  }
  return -1;
}
console.log(findDuplicate([2, 7, 5, 9, 8, 7]));




//Remembering the results from the conditionals exercise on Monday
// use the assignGrade function by logging every value from 60 to 100:
//your log should show "For 88, you got a B" "For 90 you got an A"etc..


function assignGrade() {
  for (let numgrade = 60; numgrade <= 100; grade++) {
    switch (true) {
      case grade >= 90:
        console.log(`For ${numgrade}, you got a A`);
        break;
      case grade <= 89 && grade >= 80:
        console.log(`For ${numgrade}, you got a B`);
        break;
      case grade <= 79 && grade >= 70:
        console.log(`For ${numgrade}, you got a C`);
        break;
      case grade <= 69 && grade >= 60:
        console.log(`For ${numgrade}, you got a D`);
    };
  }
}
console.log(assignGrade(73))



