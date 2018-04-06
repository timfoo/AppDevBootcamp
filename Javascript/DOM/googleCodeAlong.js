//use http://sulu13.net/google/ for the changing the logo section if you have problems.

// looping to select multiple elements
var links = document.getElementsByTagName("a")

for(var i=0; i< links.length; i++){
  console.log(links[i].textContent)
  links[i].style.background = "pink"
  links[i].style.border = "1px dashed purple"
  links[i].style.color = "orange"
  console.log(links[i].getAttribute("href"));
  links[i].setAttribute("href","http://www.yahoo.com")
}
