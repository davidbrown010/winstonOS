changeDate();

function changeDate(){
	var time = new Date();
	var day_ = time.getDay();
	var date_ = time.getDate();
	var month_ = time.getMonth();
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var refreshDate = (86400 - ((time.getHours()*3600) + (time.getMinutes() * 60) + time.getSeconds())) * 1000;

	month_ = months[month_];
	day_ = days[day_];
	document.getElementById("day").innerText = day_+",";
	document.getElementById("date").innerText = month_ + " " + date_;


	//Updates Calendar Icons
	var x = document.getElementsByClassName("calendarIcon");
	for (var i = 0; i < x.length; i++){
		//parse for shorter day name
		day_=day_.substring(0,3);
		x[i].getElementsByTagName("P")[0].innerText=day_;
		x[i].getElementsByTagName("H3")[0].innerText=date_;
	}

	console.log("date updated");
	setTimeout(changeDate, refreshDate);
}


