var age= Number(prompt("what is your age?"));
// if age is negative
if (age<0) { console.log("your age is negative!");
}
// if age is exactly 21
if (age === 21){ console.log("Happy 21st birthday");
}
// If age is odd numbered
if (age % 2 !== 0){
  console.log("Your age is odd!");
}
var ageSquare = Math.sqrt(age);
console.log(ageSquare);
console.log(ageSquare*ageSquare);
if (age % ageSquare === 0){
  console.log("Your age is square!");
}
