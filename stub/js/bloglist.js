// Get the button that opens the modal
var btn_trash1 = document.getElementById("fa1");
var btn_trash2 = document.getElementById("fa2");
var btn_trash3 = document.getElementById("fa3");
var btn_trash4 = document.getElementById("fa4");
var btn_trash5 = document.getElementById("fa5");



// Get the modal
var modal_trash = document.getElementById("myModaltrash");



//by clicking the button the modal should appear
btn_trash1.onclick = function() {
										modal_trash.style.display = "block";
									}
btn_trash2.onclick = function() {
										modal_trash.style.display = "block";
									}
btn_trash3.onclick = function() {
										modal_trash.style.display = "block";
									}
btn_trash4.onclick = function() {
										modal_trash.style.display = "block";
									}
btn_trash5.onclick = function() {
										modal_trash.style.display = "block";
									}
									
									
									
//by clicking the no button the modal will disappear
var btn_no = document.getElementById("no");
btn_no.onclick = function() {
										modal_trash.style.display = "none";
									}
 
