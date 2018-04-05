// Creating a custom forEach function

function myForEach(arr,func) {
  // loop through the array
  for(var i = 0; i < arr.length; i++){
    // call func for each item in the array
    func(arr[i]);
  }

}
