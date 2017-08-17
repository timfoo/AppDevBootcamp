// Create secret number
var secretNumber = 4;
var guess;
// ask user to guess
guess = Number(prompt("what is the secret number?"))

// check if guess is right
if (secretNumber === guess) {
  alert("you got it right!")
}
// otherwise, check if higher or lower
else if(guess > secretNumber) {
  alert("Too High, try again!")
}

else {
  alert ("Too Low, try again!")
}
