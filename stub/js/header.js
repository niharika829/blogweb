//to refresh the page
function reload(){
					document.location.reload(true);
	
					}



//SIGN UP
// Get the modal
var modal_m = document.getElementById("myModal");


// Get the button that opens the modal
var btn = document.getElementById("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks the button, open the modal 
btn.onclick = function() {
								modal_m.style.display = "block";
							}



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
								modal_m.style.display = "none";
							}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) 
								{
									if (event.target == modal_m)
																{
																	modal_m.style.display = "none";
																	}
								}






//SIGN IN
// Get the modal
var modalsign_in = document.getElementById("myModallog");


// Get the button that opens the modal
var btnsign_in = document.getElementById("myBtnlog");


// Get the <span> element that closes the modal
var spanlog = document.getElementsByClassName("closelog")[0];





// When the user clicks the button, open the modal 
btnsign_in.onclick = function() {
									modalsign_in.style.display = "block";
	
									}
									
									
									
									
									
									
	
// When the user clicks on <span> (x), close the modal
spanlog.onclick = function() 
							{
									modalsign_in.style.display = "none";
									}





//link of signup modal through sign in modal
function fun()
			{
								var modalsign = document.getElementById("myModallog");	
								//sign in modal will disapear
								modalsign.style.display = "none";	
								var modal = document.getElementById("myModal");	
								modal.style.display = "block";	
					}










