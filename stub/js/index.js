// Get the modal
var modal_create = document.getElementById("myModalcreate");



// Get the button that opens the modal
var btn_create = document.getElementById("myBtn_create");



// Get the <span> element that closes the modal
var span_create = document.getElementsByClassName("close_create")[0];



// When the user clicks the button, open the modal 
btn_create.onclick = function() {
									modal_create.style.display = "block";
									}

// When the user clicks on <span> (x), close the modal
span_create.onclick = function() {
									modal_create.style.display = "none";
									}
