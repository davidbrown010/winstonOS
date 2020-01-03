refreshWeather();
var conditions = ["Clear", "Partly Cloudy", "Cloudy", "Dust", "Fog", "Haze", "Scattered Snow", "Showers", "Smoke", "Snow", "Thunderstorms", "Tornado", "Windy"];

//currentweather Module ----------------------------------------------------------------------------------------------------------------
function getCurrentWeather(){
	var apiCallCur ="https://api.openweathermap.org/data/2.5/weather?zip=61761,us&appid=730068d097f913051348d4d637f8e527";
	$.getJSON(apiCallCur, weatherCallback);
	var conditionWord="";
}
function weatherCallback(response){
	cityName = response.name;
	//converts from kelvin to F
	currentTemp = Math.round((response.main.temp - 273.15 ) * 9 / 5 + 32);
	currentCondition = response.weather[0].description;
	updateCurrentWeather(cityName, currentTemp, currentCondition);
}

function updateCurrentWeather(cityName, currentTemp, currentCondition){
	var curW = document.getElementById("weatherContent");
	curW.getElementsByTagName("H3")[0].innerText = currentTemp+"°";
	curW.getElementsByTagName("H1")[0].innerText = replaceWeatherCondition(currentCondition);
	curW.getElementsByTagName("P")[0].innerText = cityName;
	curW.getElementsByTagName("IMG")[0].setAttribute("src",replaceWeatherImage(currentCondition));
}

function replaceWeatherCondition(word){
	var condition = word;
	var returnWord;
	var accurateCondition = "";
	var index;

	//find spaces to search each word

			var spacePos = [-1];
			var index = 0;
			var conditionParsed = [];
			
			if (condition.includes(" ")){
				//finds all the spaces
				while (condition.substring(index+1).includes(" "))
				{
					//+= to correctly define index from parsed word as index of full word (+1 because suplimenting value of the space)
					index += condition.substring(index+1).indexOf(" ")+1;
					spacePos.push(index);
				}

				//adds each word to an array in reverse order
				for(var j = spacePos.length-1;j>=0;j--)
				{
					conditionParsed.push(condition.substring(spacePos[j]+1,spacePos[j+1]));
				}
			}



	//keyword searchs
	if (condition.includes("sun"))
	{
		returnWord = "Clear";
	}
	else if (condition.includes("broken"))
	{
		returnWord = "Partly Cloudy";
	}
	else if (condition.includes("snow"))
	{
		returnWord = "Snow";
	}
	else if (condition.includes("rain"))
	{
		returnWord = "Showers";
	}
	//checks for each word in condition to see if it is included in the array of conditions
	else
	{
		for (var k = 0; k < conditionParsed.length; k++){
			if (conditionParsed[k].includes("clouds"))
				conditionParsed[k] = "cloud";
			for (var i = 0; i <conditions.length; i++)
			{
				if (conditions[i].toLowerCase().includes(conditionParsed[k]))
				{
					returnWord = conditions[i];
				}
			}
		}
	}
	//if condition isn't defined yet
	if (returnWord == undefined)
	{
		returnWord = capitalizeWord(word);
	}
	return returnWord;
}
function replaceWeatherImage(word){
	var returnImage = replaceWeatherCondition(word);
	//checks to see if word is in conditions array, if not, icon is set to clear
	for (var a = 0; a < conditions.length; a++)
	{
		if (!(conditions[a] === returnImage))
			returnImage="Clear";
	}

	//for moon vs sun img
	var time = new Date();
	var isNight;
	if (time.getHours()>=18 || time.getHours()<3)
		isNight = true;
	else
		isNight = false;

	//adds night time icons
	if (isNight == true)
	{
		if (returnImage.toLowerCase().includes("cloud"))
		{
			returnImage = "Cloudy Night";
		}
		else if (returnImage.toLowerCase().includes("clear")){
			returnImage = "Clear Night";
		}
		
	}
	var returnString = "images/weather icons/"+returnImage+".png";
	return returnString;
}







//forecast module ----------------------------------------------------------------------------------------------------------------------
function getForecast(){
	var apiCallFore ="https://api.openweathermap.org/data/2.5/forecast?zip=61761,us&appid=730068d097f913051348d4d637f8e527";
	$.getJSON(apiCallFore, forecastCallback);
}



function forecastCallback(response){
	var day1Condition = [];
	var day1Temp=0;
	var day2Condition = [];
	var day2Temp=0;
	var day3Condition= [];
	var day3Temp=0;
	var day4Condition = [];
	var day4Temp=0;
	var day5Condition = [];
	var day5Temp=0;

	//adds all temp vals to be av.ed and adds array of conditions to each day
	for (var index = 0; index < response.list.length; index++){
		if (index < response.list.length*.2)
		{
			day1Condition.push(response.list[index].weather[0].description);
			day1Temp += response.list[index].main.temp;
		}
		else if (index < response.list.length*.4)
		{
			day2Condition.push(response.list[index].weather[0].description);
			day2Temp += response.list[index].main.temp;
		}
		else if (index < response.list.length*.6)
		{
			day3Condition.push(response.list[index].weather[0].description);
			day3Temp += response.list[index].main.temp;
		}
		else if (index < response.list.length*.8)
		{
			day4Condition.push(response.list[index].weather[0].description);
			day4Temp += response.list[index].main.temp;
		}
		else if (index < response.list.length*1)
		{
			day5Condition.push(response.list[index].weather[0].description);
			day5Temp += response.list[index].main.temp;
		}
	}
	var fiveDayTemps = averageTemp(day1Temp,day2Temp,day3Temp,day4Temp,day5Temp);
	var fiveDayConditions = averageCondition(day1Condition,day2Condition,day3Condition,day4Condition,day5Condition);

	for (var i = 0; i < 5; i++){
		document.getElementById("weatherDay"+(i+1)).getElementsByTagName("P")[0].innerText=fiveDayTemps[i];
		document.getElementById("weatherDay"+(i+1)).getElementsByTagName("IMG")[0].setAttribute("src",fiveDayConditions[i]);
	}



	refreshDays();
}

//converts to F and takes av
function averageTemp(day1, day2, day3, day4, day5){
	var fiveDayTemps = [];
	
	fiveDayTemps.push(Math.round(((day1/8) - 273.15 ) * 9 / 5 + 32));
	fiveDayTemps.push(Math.round(((day2/8) - 273.15 ) * 9 / 5 + 32));
	fiveDayTemps.push(Math.round(((day3/8) - 273.15 ) * 9 / 5 + 32));
	fiveDayTemps.push(Math.round(((day4/8) - 273.15 ) * 9 / 5 + 32));
	fiveDayTemps.push(Math.round(((day5/8) - 273.15 ) * 9 / 5 + 32));

	return fiveDayTemps;
}

//finds the condition of each word, then finds the most common one and returns all five into an array
function averageCondition(day1, day2, day3, day4, day5){
	var days = [day1, day2, day3, day4, day5];
	var finalConditions = [];
	var specialWeather = ["Snow","Tornado", "Fog", "Haze","Smoke","Windy"];
	//repeats for each day
	for (var j = 0; j < days.length; j++)
	{
		var dailyConditions = [];
		var repeats = [];
		//sets all conditions to img sources into the array
		for (var k = 0; k < days[j].length; k++)
		{
			dailyConditions.push(replaceWeatherCondition(days[j][k]));
		}
		//finds the quantity of repeats and adds the amount to repeats[] in index order
		for (var l = 0; l < dailyConditions.length; l++)
		{
			var counter = 0;
			for (var m = l; m < dailyConditions.length; m++)
			{
				if(dailyConditions[l] === dailyConditions[m])
				{
					counter++;
				}
			}
			//prioritizes certain weather conditions to show over majority
				for (var z = 0; z<specialWeather.length; z++){
					if (dailyConditions[l].toLowerCase().includes(specialWeather[z].toLowerCase())){
						counter += 1000;
					}
				}

			repeats.push(counter);
		}
		//finds the highest number in repeats[] and adds it to an array
		var highestVal = 0;
		var highestValIndex = 0;
		for (var n = 0; n < repeats.length; n++){
			if (repeats[n]>highestVal)
			{
				highestVal = repeats[n];
				highestValIndex = n;
			}
		}
		finalConditions.push("images/weather icons/"+dailyConditions[highestValIndex]+".png");
	}
	return finalConditions;
}
function refreshDays(){
	var time = new Date();
	var day = time.getDay();

	var days = [];
	for (var i = 0; i < 5; i++)
	{
		//starts on next day, then converts num val to day text
		if (day==6)
			day = 0;
		else
			day++;
		if (day == 0)
		{
			days.push("Sun");
		}
		else if (day == 1)
		{
			days.push("Mon");
		}
		else if (day == 2)
		{
			days.push("Tues");
		}
		else if (day == 3)
		{
			days.push("Wed");
		}
		else if (day == 4)
		{
			days.push("Thurs");
		}
		else if (day == 5)
		{
			days.push("Fri");
		}
		else if (day == 6)
		{
			days.push("Sat");
		}
		//adds the text to the html 
		document.getElementById("weatherDay"+(i+1)).getElementsByTagName("H3")[0].innerText=days[i];
	}
	
}


function refreshWeather(){
	var time = new Date();
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();
	
	getCurrentWeather();
	getForecast();



	console.log("weather updated");
	setInterval(function(){refreshWeather();}, (24*60*60*1000)-(((hours*3600)+(minutes*60)+seconds)*1000));
}

function capitalizeWord(word){
	var spacePos = [-1];
	var index = 0;
	
		//finds all the spaces
		while (word.substring(index+1).includes(" "))
		{
			//+= to correctly define index from parsed word as index of full word (+1 because suplimenting value of the space)
			index += word.substring(index+1).indexOf(" ")+1;
			spacePos.push(index);
		}

		//capitalize every 
		for(var j = 0; j < spacePos.length;j++)
		{
			word = word.substring(spacePos[j]+1,spacePos[j]+2).toUpperCase() + word.substring(spacePos[j]+2);
		}
	

	return word;
}
