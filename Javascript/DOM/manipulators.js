// Changing an element's style
var tag = document.getElementById("highlight")

tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";

  // If you want to change multiple attributes at one go, the better way to do it is like this
  // Define a class in class
  .some-class{
    color = "blue";
    border = "10px solid red";
    fontSize = "70px";
    background = "yellow";
    marginTop = "200px";
  }

  // Add the new class to the selected element
  tag.classList.add("some-class");

// adding/remove classes
  // classList : a read-only list that contains the classes for a given element. It is *not* an array
  // Add a class
  tag.classList.add("some-class");

  // Remove a class
  tag.classList.remove("some-class");

  // Toggle a class
  tag.classList.toggle("some-class");


// changing the content of a tag
  // textContent : returns a string of all the text within a given element. If you insert HTML using this method, it will treat the input as pure text (i.e. HTML is not rendered. Use innerHTML instead if you want to add HTML)
  <p>
    This is an <strong> awesome </strong> paragraph
  </p>


  // Retrieve the textContent
  tag.textContent //"This is an awesome paragraph"

  // Alter the textContent
  tag.textContent = "blah blah blah"

  // innerHTML : similar to textContent, except that it returns all the HTML within a given element.
  tag.innerHTML //"This is an <strong> awesome </strong> paragraph"

// changing attributes (src, href, etc...)
  // getAttribute() and setAttribute() to read and write attributes like src and href

  <a href="http://www.google.com">I am a link </a>
  <img src ="logo.png">

  var link = docment.querySelector("a");
  link.getAttribute("href"); //"www.google.com"

  // changing the href attribute
  link.setAttribute("href","http://www.dogs.com"); //<a href="www.dogs.com">I am a link</a>

  // changing the img src
  var img = document.querySelector("img");
  img.setAttribute("src","corgi.png"); //<img src="corgi.png">
