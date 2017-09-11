var todos = [];
var input = prompt("What would you like to do?")
if(input === "list"){
  console.log(todos);
} else if (input === "new") {
// ask for new todo
var newTodo = prompt("Enter new todo");
// add to todos array
todos.push(newTodo);
}

while(input !== "quit"){
  // handle input
  if(input === "list"){
    console.log(todos);
  }
  else if (input === "new") {
    // ask for new todo
    var newTodo = prompt("Enter new todo");
    // add to todos array
    todos.push(newTodo);
  }
  else if (input === "delete"){
    // check which to delete
    var deleteTask = prompt("which one would you like to delete?")
    // delete the task
    todos.splice(todos.indexOf(deleteTask),1);
  }
  // ask for new input
  input = prompt("What would you like to do?")
}
console.log("Ok, you have quit the app")
