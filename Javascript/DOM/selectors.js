//Learning about selectors

// Selecting by id
var tag_id = document.getElementById("highlight");

// Selecting by class
var tag_class = document.getElementsByClassName("bolded")

// Selecting by tags
var tag_tag = document.getElementsByTagName("id")

// Query selector - Takes the first match only
// For selecting all, use querySelectorAll("")
  // Select by id (follow CSS convention)
  var tag_qs_id = document.querySelector("#highlight");

  // Select by class
  var tag_qe_class = document.querySelector(".bolded");
