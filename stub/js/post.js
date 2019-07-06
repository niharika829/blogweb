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
var clicks = 0;
function postLiked(){
             clicks += 1;
			 if(clicks === 1){
        document.getElementById("commentCount").innerHTML = clicks +" person likes this!";
			 }else{
				 
				document.getElementById("commentCount").innerHTML = clicks +" people have liked this!";
			 }
 document.getElementById("like").innerHTML=" Liked!";
           }
		   
