// write a function isEven() which takes a single numeric argument and returns true if the number is even and false otherwise.

function isEven(num) {
  if (num%2===0){
    return "True"
  }
  else {
    return "false"
  }
}

// alternate way
// function isEven(num){
//  return num%2===0; <--- Return will evaluate the num%2===0 as a boolean statement and return true or false
// }

// write a function factorial() which takes a single numeric argument and returns the factorial of that number.
// 4! is 4x3x2x1

function factorial(num) {
  // define a result variable
  var result = 1
  // calculate the factorial and store value in result
  for (var i = 2; i<=num; i++){
    result *= i
  }
  // return the result variable
  return result
}

// write a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased_version.
// Basically, replace "-" with "_"

function kebabToSnake(str){
  // replace all - with _
  var snakestring = str.replace(/-/g,"_");
  // Return str
  return snakestring;
}
