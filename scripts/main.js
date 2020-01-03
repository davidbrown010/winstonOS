var displayOn = 0;
function openDisplay(){
	document.getElementById("clockContainer").setAttribute("class","scaleUp");
	setTimeout(function(){document.getElementById("clockContainer").setAttribute("class","hide hidden");},500);
	document.getElementById("currentWeather").setAttribute("class","fadeIn grid-item");
	document.getElementById("upNext").setAttribute("class","fadeIn grid-item");
	document.getElementById("dateHeader").setAttribute("class","fadeIn grid-item");
	document.getElementById("forecast").setAttribute("class","fadeIn grid-item");
	document.getElementById("music").setAttribute("class","fadeIn grid-item");
	document.getElementById("bible").setAttribute("class","fadeIn grid-item");
	document.getElementById("tasks").setAttribute("class","fadeIn grid-item");
	document.getElementById("news").setAttribute("class","fadeIn grid-item");
	displayOn=true;
	console.log("display opened");
}
function closeDisplay(){
	
	if(displayOn==true)
	{
		displayOn=false;
		console.log("closeDisplay");
		document.getElementById("currentWeather").setAttribute("class","hidden grid-item");
		document.getElementById("upNext").setAttribute("class","hidden grid-item");
		document.getElementById("dateHeader").setAttribute("class","hidden grid-item");
		document.getElementById("forecast").setAttribute("class","hidden grid-item");
		document.getElementById("music").setAttribute("class","hidden grid-item");
		document.getElementById("bible").setAttribute("class","hidden grid-item");
		document.getElementById("tasks").setAttribute("class","hidden grid-item");
		document.getElementById("news").setAttribute("class","hidden grid-item");
		setTimeout(function(){document.getElementById("clockContainer").setAttribute("class","unhide fadeIn")},500);
	}
}