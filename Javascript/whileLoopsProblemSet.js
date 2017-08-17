// Print all number between -10 and 19
console.log("Print numbers between -10 and 19");
var counter = -10;
while(counter <=19){
  console.log(counter);
  counter++;
}

// Print all even numbers between 10 and 40
console.log("Print even numbers between 10 and 40");
var counter = 10;
while(counter <=40){
  console.log(counter);
  counter+=2;
}
// alternate script - it goes through all the numbers, but only prints out the even numbers.
// while (counter <=40){
//  if (counter % 2 === 0){
//  console.log(counter);
//  }
//  counter+=1;
// }

// Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333");
var counter = 300;
while (counter <=333){
 if (counter % 2 !== 0){
 console.log(counter);
 }
 counter++;
}

// Print all numbers divisible by 5 AND 3 between 5 and 50
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
var counter = 5;
while (counter <=50){
 if (counter % 5 === 0 && counter % 3 === 0){
 console.log(counter);
 }
 counter++;
}
