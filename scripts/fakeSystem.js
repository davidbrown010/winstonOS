var relaventVocab = [];
var greetings = ["Good Morning.", "Good Afternoon.", "Good Evening."];
var sayings = ["Welcome, David.", "Seize The Day.", "Yeet."];
var refreshTime = 15000;
var pos = 1;
var maxLineLength = 13;
var time = new Date();
var transitionTime = 1000;

checkGreeting();
addSayings();
formatSayings();
//runs first saying on start up, then refreshes with setInterval
document.getElementById("systemSaying").innerHTML = relaventVocab[0];
setInterval(function(){replaceScript()},refreshTime);



//determines which greeting based on time.
function checkGreeting(){
	if (time.getHours() < 12)
		relaventVocab.push(greetings[0]);
	else if (time.getHours() < 18)
		relaventVocab.push(greetings[1]);
	else
		relaventVocab.push(greetings[2]);
}
//adds sayings array to relaventVocab array
function addSayings(){
	for (var i =0;i<sayings.length; i++)
	{
		relaventVocab.push(sayings[i]);
	}
}
//cycles through sayings
function replaceScript(){
	replaceWord(relaventVocab[pos]);
	if (relaventVocab.length-1 > pos)
		pos++;
	else
		pos=0;
}
//changes text to saying from DOM
function replaceWord(saying)
{
	document.getElementById("systemSaying").setAttribute("class","hidden")
	setTimeout(function(){document.getElementById("systemSaying").innerHTML = saying;}, transitionTime);
	setTimeout(function(){document.getElementById("systemSaying").setAttribute("class","fadeIn");}, transitionTime);

}
//formats line breaks and length to fit on page
function formatSayings(){
	for(var i =0; i < relaventVocab.length;i++)
	{
		var word = relaventVocab[i];
		if (word.length>maxLineLength)
		{
			if (word.length>maxLineLength*2)
				word=word.substring(0,(maxLineLength*2)-2) + "...";
			var spacePos = [0];
			var index = 0;
			
			if (word.includes(" ")){
				//finds all the spaces
				while (word.substring(index+1).includes(" "))
				{
					//+= to correctly define index from parsed word as index of full word (+1 because suplimenting value of the space)
					index += word.substring(index+1).indexOf(" ")+1;
					spacePos.push(index);
				}

				//creates the line break at the space closest to the maxLineLength
				for(var j = spacePos.length-1;j>=0;j--)
				{
					if (spacePos[j]<=maxLineLength){
						word = word.substring(0,spacePos[j])+"<br>"+word.substring(spacePos[j]+1);
						j = -1;
					}
				}
			}
			else 
			{
				word=word.substring(0,maxLineLength-2) + "...";
			}
		}
		relaventVocab[i]=word;
	}
}
