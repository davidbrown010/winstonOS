var amPm = false;
createTime(amPm);
setClock();



function setClock(){
	var clock = new Date();
	var h = clock.getHours();
	var m = clock.getMinutes();
	if (h>12)
	{
		h -= 12;
	}
	if (h==0)
		h=12;
	if (m<10)
	{
		m = "0" + m;
	}
	var refreshTime = (60 - clock.getSeconds())*1000;
	document.getElementById("topClockText").innerText = h+":"+m;
	console.log("clock updated");
	setTimeout(setClock, refreshTime);
}

//Running functions
function createTime(amPm){
	inactivateLight();
	var time = new Date();
	var hour = time.getHours();
	var minute = time.getMinutes();
	var second = time.getSeconds();
	var refreshTime = (60 - second)*1000;
	var counter = 1;

	//takes out all active chars every 5 minutes
	if(minute%5==0)
		inactivateLight();
	//activates relevant chars
	it();
	is();
	if (amPm == true)
		amOrPm(hour);
	readMinute(minute);
	readHour(hour, minute);
	console.log("wordSearchDisplay updated");
	setTimeout(createTime, refreshTime);
}






//Time interpretation functions
function amOrPm(hour){
	if (hour>11)
		pm();
	else
		am();
}
function readHour(hour, minute){
	if (minute >= 35)
		hour++;

	if (hour>12)
		hour-=12;

	if(hour==1)
		oneHour();
	else if(hour==2)
		twoHour();
	else if(hour==3)
		threeHour();
	else if(hour==4)
		fourHour();
	else if(hour==5)
		fiveHour();
	else if(hour==6)
		sixHour();
	else if(hour==7)
		sevenHour();
	else if(hour==8)
		eightHour();
	else if(hour==9)
		nineHour();
	else if(hour==10)
		tenHour();
	else if(hour==11)
		elevenHour();
	else if(hour==0 || hour==12)
		twelveHour();
}
function readMinute(minute){
	
		if (minute<3 || minute>57)
			oclock();
		else if (minute<33)
		{
			if (minute<8)
				five();
			else if (minute<13)
				ten();
			else if (minute<18)
			{
				a();
				quarter();
			}
			else if (minute<23)
				twenty();
			else if (minute<28)
				twentyFive();
			else if (minute<33)
				half();
			past();
		}
	else{
		minute = 60-minute;
		if (minute<=7)
			five();
		else if (minute<=12)
			ten();
		else if (minute<=17)
		{
			a();
			quarter();
		}
		else if (minute<=22)
			twenty();
		else if (minute<=27)
			twentyFive();
		to();
	}
}


//Active Display Functions
function it(){
	document.getElementById("a1").setAttribute("class", "active");
	document.getElementById("a2").setAttribute("class", "active");
}
function is(){
	document.getElementById("a4").setAttribute("class", "active");
	document.getElementById("a5").setAttribute("class", "active");
}
function am(){
	document.getElementById("a8").setAttribute("class", "active");
	document.getElementById("a9").setAttribute("class", "active");
}
function pm(){
	document.getElementById("a10").setAttribute("class", "active");
	document.getElementById("a11").setAttribute("class", "active");
}
function a(){
	document.getElementById("b1").setAttribute("class", "active");
}
function quarter(){
	document.getElementById("b3").setAttribute("class", "active");
	document.getElementById("b4").setAttribute("class", "active");
	document.getElementById("b5").setAttribute("class", "active");
	document.getElementById("b6").setAttribute("class", "active");
	document.getElementById("b7").setAttribute("class", "active");
	document.getElementById("b8").setAttribute("class", "active");
	document.getElementById("b9").setAttribute("class", "active");
}
function twenty(){
	document.getElementById("c1").setAttribute("class", "active");
	document.getElementById("c2").setAttribute("class", "active");
	document.getElementById("c3").setAttribute("class", "active");
	document.getElementById("c4").setAttribute("class", "active");
	document.getElementById("c5").setAttribute("class", "active");
	document.getElementById("c6").setAttribute("class", "active");
}
function twentyFive(){
	document.getElementById("c1").setAttribute("class", "active");
	document.getElementById("c2").setAttribute("class", "active");
	document.getElementById("c3").setAttribute("class", "active");
	document.getElementById("c4").setAttribute("class", "active");
	document.getElementById("c5").setAttribute("class", "active");
	document.getElementById("c6").setAttribute("class", "active");
	document.getElementById("c7").setAttribute("class", "active");
	document.getElementById("c8").setAttribute("class", "active");
	document.getElementById("c9").setAttribute("class", "active");
	document.getElementById("c10").setAttribute("class", "active");
}
function five(){
	document.getElementById("c7").setAttribute("class", "active");
	document.getElementById("c8").setAttribute("class", "active");
	document.getElementById("c9").setAttribute("class", "active");
	document.getElementById("c10").setAttribute("class", "active");
}
function half(){
	document.getElementById("d1").setAttribute("class", "active");
	document.getElementById("d2").setAttribute("class", "active");
	document.getElementById("d3").setAttribute("class", "active");
	document.getElementById("d4").setAttribute("class", "active");
}
function ten(){
	document.getElementById("d6").setAttribute("class", "active");
	document.getElementById("d7").setAttribute("class", "active");
	document.getElementById("d8").setAttribute("class", "active");
}
function to(){
	document.getElementById("d10").setAttribute("class", "active");
	document.getElementById("d11").setAttribute("class", "active");
}
function past(){
	document.getElementById("e1").setAttribute("class", "active");
	document.getElementById("e2").setAttribute("class", "active");
	document.getElementById("e3").setAttribute("class", "active");
	document.getElementById("e4").setAttribute("class", "active");
}
function nineHour(){
	document.getElementById("e8").setAttribute("class", "active");
	document.getElementById("e9").setAttribute("class", "active");
	document.getElementById("e10").setAttribute("class", "active");
	document.getElementById("e11").setAttribute("class", "active");
}
function oneHour(){
	document.getElementById("f1").setAttribute("class", "active");
	document.getElementById("f2").setAttribute("class", "active");
	document.getElementById("f3").setAttribute("class", "active");
}
function sixHour(){
	document.getElementById("f4").setAttribute("class", "active");
	document.getElementById("f5").setAttribute("class", "active");
	document.getElementById("f6").setAttribute("class", "active");
}
function threeHour(){
	document.getElementById("f7").setAttribute("class", "active");
	document.getElementById("f8").setAttribute("class", "active");
	document.getElementById("f9").setAttribute("class", "active");
	document.getElementById("f10").setAttribute("class", "active");
	document.getElementById("f11").setAttribute("class", "active");
}
function fourHour(){
	document.getElementById("g1").setAttribute("class", "active");
	document.getElementById("g2").setAttribute("class", "active");
	document.getElementById("g3").setAttribute("class", "active");
	document.getElementById("g4").setAttribute("class", "active");
}
function fiveHour(){
	document.getElementById("g5").setAttribute("class", "active");
	document.getElementById("g6").setAttribute("class", "active");
	document.getElementById("g7").setAttribute("class", "active");
	document.getElementById("g8").setAttribute("class", "active");
}
function twoHour(){
	document.getElementById("g9").setAttribute("class", "active");
	document.getElementById("g10").setAttribute("class", "active");
	document.getElementById("g11").setAttribute("class", "active");
}
function eightHour(){
	document.getElementById("h1").setAttribute("class", "active");
	document.getElementById("h2").setAttribute("class", "active");
	document.getElementById("h3").setAttribute("class", "active");
	document.getElementById("h4").setAttribute("class", "active");
	document.getElementById("h5").setAttribute("class", "active");
}
function elevenHour(){
	document.getElementById("h6").setAttribute("class", "active");
	document.getElementById("h7").setAttribute("class", "active");
	document.getElementById("h8").setAttribute("class", "active");
	document.getElementById("h9").setAttribute("class", "active");
	document.getElementById("h10").setAttribute("class", "active");
	document.getElementById("h11").setAttribute("class", "active");
}
function sevenHour(){
	document.getElementById("i1").setAttribute("class", "active");
	document.getElementById("i2").setAttribute("class", "active");
	document.getElementById("i3").setAttribute("class", "active");
	document.getElementById("i4").setAttribute("class", "active");
	document.getElementById("i5").setAttribute("class", "active");
}
function twelveHour(){
	document.getElementById("i6").setAttribute("class", "active");
	document.getElementById("i7").setAttribute("class", "active");
	document.getElementById("i8").setAttribute("class", "active");
	document.getElementById("i9").setAttribute("class", "active");
	document.getElementById("i10").setAttribute("class", "active");
	document.getElementById("i11").setAttribute("class", "active");
}
function tenHour(){
	document.getElementById("j1").setAttribute("class", "active");
	document.getElementById("j2").setAttribute("class", "active");
	document.getElementById("j3").setAttribute("class", "active");
}
function oclock(){
	document.getElementById("j6").setAttribute("class", "active");
	document.getElementById("j7").setAttribute("class", "active");
	document.getElementById("j8").setAttribute("class", "active");
	document.getElementById("j9").setAttribute("class", "active");
	document.getElementById("j10").setAttribute("class", "active");
	document.getElementById("j11").setAttribute("class", "active");
}
function inactivateLight(){
	for (i=1;i<12;i++){
	var letterArray=["a","b","c","d","e","f","g","h","i","j"];
		for(j=0;j<letterArray.length; j++)
		{
			var index = letterArray[j]+i;
			document.getElementById(index).setAttribute("class","unactive");
		}
	}
}
