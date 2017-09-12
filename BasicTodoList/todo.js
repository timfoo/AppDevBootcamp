var todos = ["Buy cheese"];
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
    listTodos();
  }
  else if (input === "new") {
    listNew();
  }
  else if (input === "delete"){
    listDelete();
  }
  // ask for new input
  input = prompt("What would you like to do?")
}
console.log("Ok, you have quit the app")

function listTodos(){
  console.log("**********")
  todos.forEach(function(todos,index){
    console.log(index + ": "+ todos);
  });
  console.log("**********")
}

function listNew(){
  // ask for new todo
  var newTodo = prompt("Enter new todo");
  // add to todos array
  todos.push(newTodo);
}

function listDelete(){
  // check which to delete
  var deleteTask = prompt("which one would you like to delete? - Enter index")
  // delete the task
  todos.splice(deleteTask,1);
  console.log("You've deleted the task!")
}
