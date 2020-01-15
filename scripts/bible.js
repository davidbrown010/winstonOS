refreshBible();



function refreshBible(){
	var apiToken = "M5bdALTzNSIPmNuXMBdR8qMPOtA";
	var time = new Date();
	var day = (Date.now()/(3600*1000*24)).toFixed(0);
	console.log(day);
	fetch('https://developers.youversionapi.com/1.0/verse_of_the_day/' + day + '?version_id=206', {
	    headers: {
	        'X-YouVersion-Developer-Token': apiToken,
	        'Accept-Language': 'en',
	        Accept: 'application/json',
	    }
	})
	.then((result) => result.json())
	.then((json) => bibleFunction(json));
	console.log("bible updated");
	//Check for new version ids
	//getBibleVersions();
	setTimeout(function(){refreshBible();},(24*60*60*1000)-(((time.getHours()*60*60)+(time.getMinutes()*60)+(time.getSeconds()))*1000));
}


function bibleFunction(json){
	var img = json.image.url;
	var text = formatText(json.verse.text);
	var source = formatSource(json.verse.usfms);
	document.getElementById("bible").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(https:"+img+")";
	document.getElementById("bibleContainter").getElementsByTagName("H3")[0].innerText = text;
	document.getElementById("bibleContainter").getElementsByTagName("H5")[0].innerText = source;	
}

function formatSource(word){
	var source = word.toString();
	var book = source.substring(0,source.indexOf(".")+1);
	source = source.substring(source.indexOf(".")+1);
	var chapter = source.substring(0,source.indexOf("."));
	source = source.substring(source.indexOf(".")+1);
	var verse = source;
	

	//capitlize first letter
	book = book.substring(0,1).toUpperCase() + book.substring(1).toLowerCase();

	source = book + " "+ chapter+":"+verse;
	return source;
}

function formatText(text){
	text = text.toString();
	var maxLength = 70;
	if (text.length> maxLength)
		text = text.substring(0,67)+ "...";
	return text;
}


function getBibleVersions(){
	fetch('https://developers.youversionapi.com/1.0/versions', {
    headers: {
        'X-YouVersion-Developer-Token': "M5bdALTzNSIPmNuXMBdR8qMPOtA",
        'Accept-Language': 'en',
        Accept: 'application/json',
    }
	})
	.then((result) => result.json())
	.then((json) => console.log(json))

}
