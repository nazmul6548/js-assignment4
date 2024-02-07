// 1
// function calculateMoney(ticketSale) {
//     if (ticketSale <= 0) {
//         return 'Invalid Number'
//     }
//     let ticketPrice = 120;
//     let perDayDarowan = 500;
//     let stupLunce = 8 * 50;
//     let totalDarwanAndLunce = perDayDarowan + stupLunce;
//     let totalTicketSellPrice = ticketPrice * ticketSale;
//     let totalTk = totalTicketSellPrice -  totalDarwanAndLunce;
//     return totalTk

// }
// const ticket =-130;
// console.log(calculateMoney(ticket));
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
// const myName = "utsho";
// console.log(checkName(myName));
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

// const myInput = [ 1 , 2 , -3 ];
// console.log(deleteInvalids(myInput));

// 4
/*function signature/sample */
function password(obj) {
    if (Object.keys(obj).length !== 3) {
        return "invalid"
    }
    else if (!obj.birthYear || obj.birthYear.toString().length < 4) {
        return "invalid"
    }
    else {
    let name = obj.name;
    let birth = obj.birthYear;
    let siteName = obj.siteName;
    let slicing= siteName.slice(1);
    let toUpperCase =siteName.charAt(0).toUpperCase();
    let addition =toUpperCase+slicing;
    let myOutput =`${addition}#${name}@${birth}`
    return myOutput;
    }
    
}
const myArray = { name: 'maisha' , birthYear: 2002 };
console.log(password(myArray));










// 5

// function monthlySavings(arr, livingCost) {
//   let sum = 0;

//   if (Array.isArray(arr) === false || typeof livingCost !== "number") {
//     return "invalid input";
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 3000) {
//       let discount = 0.2 * arr[i];
//       arr[i] -= discount;
//     }
//     sum = sum + arr[i];
//   }
//   let result = sum - livingCost;
//   if (result < 0) {
//     return "earn more";
//   }
//   return result;
// }

// const myarray = [1000, 2000, 3000];
// const livingCost = 5400;
// console.log(monthlySavings(myarray, livingCost));
