function myFunction() {
  document.getElementById("blogBody").contentEditable = true;
 document.getElementById("edit").style.display = "none";
 document.getElementById("done").style.display = "block";
 
}

function myFunctionsave() {
  document.getElementById("blogBody").contentEditable = false;
 document.getElementById("edit").style.display = "block";
 document.getElementById("done").style.display = "none";
 
}
