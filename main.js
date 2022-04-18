let timer;
let timerID;
  
function eventReset() {
	clearInterval(timerID);
	timer = 0; 
	document.getElementById("timeCount").innerHTML = count_format(0);
	document.getElementById("reset").disabled = true;
	document.getElementById("start").disabled = false;
}

function eventStart() { 
	timer = 0;
	timerID = setInterval("count_up()",100); 
	document.getElementById("start").disabled = true;
	document.getElementById("stop").disabled = false;
	document.getElementById("reset").disabled = false;
}

function count_up() {
	timer++;
	document.getElementById("timeCount").innerHTML = count_format(timer);
}

function eventStop() {
	clearInterval(timerID);
	document.getElementById("stop").disabled = true;
	document.getElementById("start").disabled = false;
}

function count_format(num) {
	var ms = num % 10;
	var s = Math.floor(num / 10);
	var m = Math.floor(s / 10);
	var h = Math.floor(m / 10);
	return h + ":" + m + ":" + s + ":" + ms;
}