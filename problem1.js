function calculateMoney(ticketSale) {
  if (ticketSale <= 0) {
      return 'Invalid Number'
  }
  let ticketPrice = 120;
  let perDayDarowan = 500;
  let stuffLunce = 8 * 50;
  let totalDarwanAndLunce = perDayDarowan + stuffLunce;
  let totalTicketSellPrice = ticketPrice * ticketSale;
  let totalTk = totalTicketSellPrice -  totalDarwanAndLunce;
  return totalTk;

}



function checkName(name) {
if (typeof name !== "string") {
  return "invalid";
}
let convertLowerCase = name.toLowerCase();
let lastLetter = convertLowerCase[convertLowerCase.length - 1];
if (
  lastLetter === "a" ||
  lastLetter === "y" ||
  lastLetter === "i" ||
  lastLetter === "e" ||
  lastLetter === "o" ||
  lastLetter === "u" ||
  lastLetter === "w"
) {
  return "Good Name";
} else {
  return "Bad Name";
}
}



function deleteInvalids(array) {
let myStore = [];
if (Array.isArray(array) !== true) {
  return "Invalid Array";
}
for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === "number" && !isNaN(array[i])) {
    myStore.push(array[i]);
  }
}
return myStore;
}



function password(obj) {
if (Object.keys(obj).length !== 3) {
  return "invalid";
} else if (!obj.birthYear || obj.birthYear.toString().length < 4) {
  return "invalid";
} else {
  let name = obj.name;
  let birth = obj.birthYear;
  let siteName = obj.siteName;
  let slicing = siteName.slice(1);
  let toUpperCase = siteName.charAt(0).toUpperCase();
  let addition = toUpperCase + slicing;
  let myOutput = `${addition}#${name}@${birth}`;
  return myOutput;
}
}


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
  return "earn more";
}
return result;
}
