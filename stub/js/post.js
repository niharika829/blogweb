function addComments(id){
			
			var happy =document.getElementById("userComments").value;
			
			if(happy.length===0)//comment box should not be empty
					{
							alert('The comment section cannot be empty');
						}
			else if(happy.length>235)//word limit should not exeed
					{
							alert('not more than 235 words(including spaces!!!)');
							document.getElementById("word-count").style.display="block";
							word(userComments);//to display word count
						}
			else
					{
							//word count should not be displayed if number of characters in comment box did not exceed the limit
							document.getElementById("word-count").style.display="none";
							//storing whatever user writes in comment box
							var addEventName = id.value;
							//everytime user enters a comment a div is created
							var a = document.getElementById('userComments');
							theParent = document.getElementById("addEventNames");
							theKid = document.createElement("div");
							theseckid =document.createElement("div");
							theseckid.innerHTML = addEventName;
							theKid.appendChild(theseckid);
							theKid.style.backgroundColor ="	gainsboro";
							theKid.style.height ="10%";
							theseckid.style.backgroundColor ="white";
							theseckid.style.width ="95%";
							theseckid.style.textOverflow="ellipsis";
							theseckid.style.height ="60%";
							theseckid.style.position ="relative";
							theseckid.style.top ="20%";
							theseckid.style.left ="2%";
							
							
							
							// append theKid to the end of theParent
							theParent.appendChild(theKid);

							// prepend theKid to the beginning of theParent
							theParent.insertBefore(theKid, theParent.firstChild);
							//placeholder will appear in the input box after every entry by user
							a.value=a.defaultValue;
							document.getElementById("addEventNames").style.display = "block";
							document.getElementById("block").style.display = "block";
						}		   
}





//to count number of words in the comment box
function word(id)
					{ 
							var result =document.getElementById("userComments").value;
							var len=result.length;
							document.getElementById("word-count").innerHTML="word count:-"+len;
						}
						
//function for edit button						
function myFunction()
					{
							document.getElementById("blogTitleNew").contentEditable = true;
							document.getElementById("blogBody").contentEditable = true;
							document.getElementById("edit").style.display = "none";
							document.getElementById("done").style.display = "block";
 
						}
						
//function for save button
function myFunctionsave() 
						{
							document.getElementById("blogTitleNew").contentEditable = false;
							document.getElementById("blogBody").contentEditable = false;
							document.getElementById("edit").style.display = "block";
							document.getElementById("done").style.display = "none";
 
							}



//to calculate number of clicks
var clicks = 0;
//function for like button
function postLiked()
					{
							clicks += 1;
							
							if(clicks === 1)
											{
											document.getElementById("commentCount").innerHTML = clicks +" person likes this!";
												}
							else
											{
											document.getElementById("commentCount").innerHTML = clicks +" people have liked this!";
												}
							document.getElementById("like").innerHTML=" Liked!";
						}
		   
