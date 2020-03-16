var now = new Date();
var firstDay = new Date("2015-08-09");
//var toNow = now.getTime();
//var toFirst = firstDay.getTime();
//var passedTime = toNow - toFirst; 
var passedTime = now.getTime()-firstDay.getTime();

var passedDay = Math.round(passedTime/(1000*60*60*24));

document.querySelector("#accent").innerText = passedDay + "일";
