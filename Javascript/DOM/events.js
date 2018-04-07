// Syntax

//Select an object and add an event listener
element.addEventListener(type, functionToCall);

var button = document.querySelector("button");
button.addEventListener("click", function()
  console.log("SOMEONE CLICKED THE BUTTON!")
});

// Example with a for loop
var lis = document.querySelectorAll("li");
for(var i = 0; i<lis.length; i++){
  lis[i].addEventListener("click", function(){
    this.style.color = "pink";
  }
);
}
