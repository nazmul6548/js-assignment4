// 1
// function calculateMoney(ticketSale) {
//     if (ticketSale <= 0) {
//         return 'Invalid Number'
//     }
//     let ticketPrice = 120;
//     let perDayDarowan = 500;
//     let stuffLunce = 8 * 50;
//     let totalDarwanAndLunce = perDayDarowan + stuffLunce;
//     let totalTicketSellPrice = ticketPrice * ticketSale;
//     let totalTk = totalTicketSellPrice -  totalDarwanAndLunce;
//     return totalTk;

// }
// const ticket =10;
// const ticket1 =1055;
// const ticket2 =93;
// const ticket3 =-130;

// console.log(calculateMoney(ticket));
// console.log(calculateMoney(ticket1));
// console.log(calculateMoney(ticket2));
// console.log(calculateMoney(ticket3));

// 2
// function checkName(name) {
//   if (typeof name !== "string") {
//     return "invalid";
//   }
//   let converLowerCase = name.toLowerCase();
//   let lastLetter = converLowerCase[converLowerCase.length - 1];
//   if (
//     lastLetter === "a" ||
//     lastLetter === "y" ||
//     lastLetter === "i" ||
//     lastLetter === "e" ||
//     lastLetter === "o" ||
//     lastLetter === "u" ||
//     lastLetter === "w"
//   ) {
//     return "Good Name";
//   } else {
//     return "Bad Name";
//   }
// }
// const myName = "salman";
// const myName1 = "RAFEE";
// const myName2 = "Jhankar";
// const myName3 = 199;
// const myName4 = ['Rashed'];
// console.log(checkName(myName));
// console.log(checkName(myName1));
// console.log(checkName(myName2));
// console.log(checkName(myName3));
// console.log(checkName(myName4));

//3
// function deleteInvalids(array) {
//   let myStore = [];
//   if (Array.isArray(array) !== true) {
//     return "Invalid Array";
//   }
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "number" && !isNaN(array[i])) {
//       myStore.push(array[i]);
//     }
//   }
//   return myStore;
// }

// const myInput = [1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
// const myInput1 = ["1" , {num:2} , NaN ];
// const myInput2 = [ 1 , 2 , -3 ];
// const myInput3 = {num: [ 1 , 2 , 3 ]};
// console.log(deleteInvalids(myInput));
// console.log(deleteInvalids(myInput1));
// console.log(deleteInvalids(myInput2));
// console.log(deleteInvalids(myInput3));

// 4

// function password(obj) {
//   if (Object.keys(obj).length !== 3) {
//     return "invalid";
//   } else if (!obj.birthYear || obj.birthYear.toString().length < 4) {
//     return "invalid";
//   } else {
//     let name = obj.name;
//     let birth = obj.birthYear;
//     let siteName = obj.siteName;
//     let slicing = siteName.slice(1);
//     let toUpperCase = siteName.charAt(0).toUpperCase();
//     let addition = toUpperCase + slicing;
//     let myOutput = `${addition}#${name}@${birth}`;
//     return myOutput;
//   }
// }
// const myArray = { name: 'kolimuddin' , birthYear: 1999 , siteName: 'google' };
// const myArray1 = { name: 'rahat' , birthYear: 2002, siteName: 'Facebook' };
// const myArray2 ={ name: 'toky' , birthYear: 200, siteName: 'Facebook' };
// const myArray3 = { name: 'maisha' , birthYear: 2002 };
// console.log(password(myArray));
// console.log(password(myArray1));
// console.log(password(myArray2));
// console.log(password(myArray3));

// 5

function monthlySavings(arr, livingCost) {
  let sum = 0;

  if (Array.isArray(arr) === false || typeof livingCost !== "number") {
    return "invalid input";
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 3000) {
      let discount = 0.2 * arr[i];
      arr[i] = arr[i] - discount;
    }
    sum = sum + arr[i];
  }
  let result = sum - livingCost;
  if (result < 0) {
    return '"earn more"';
  }
  return result;
}

const myarray = [1000, 2000, 3000];
const myarray1 = [1000, 2000, 2500];
const myarray2 = [900, 2700, 3400];
const myarray3 = 100;
const livingCost = 5400;
const livingCost1 = 5000;
const livingCost2 = 10000;
const livingCost3 = [900, 2700, 3400];
console.log(monthlySavings(myarray, livingCost));
console.log(monthlySavings(myarray1, livingCost1));
console.log(monthlySavings(myarray2, livingCost2));
console.log(monthlySavings(myarray3, livingCost3));
