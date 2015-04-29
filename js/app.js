$(document).ready(function(){

var nextQ = 2

function answer(x) {
	if (nextQ === 2) {
		x = q2;
		$('.answer').show();
	} else if (nextQ === 3) {
		x = q3;
		$('.answer').show();
	} else if (nextQ === 4) {
		x = q4;
		$('.answer').show();
	} else if (nextQ === 5) {
		x = q5;
		$('.answer').show();
	} 
	$("#q-content").text(x[0]);
	$("#a1-content").text(x[1]);
	$("#a2-content").text(x[2]);
	$("#a3-content").text(x[3]);
	$("#a4-content").text(x[4]);
	nextQ++;
}

var q2 = ["this is question 2" , "q2-opt1" , "q2-opt2" , "q2-opt3" , "q2-opt4"];
var q3 = ["this is question 3" , "q3-opt1" , "q3-opt2" , "q3-opt3" , "q3-opt4"];
var q4 = ["this is question 4" , "q4-opt1" , "q4-opt2" , "q4-opt3" , "q4-opt4"];
var q5 = ["this is question 5" , "q5-opt1" , "q5-opt2" , "q5-opt3" , "q5-opt4"];

$(".a").click(function(){
	answer();
});

$("#answer1").click(function(){
	if (nextQ === 2) {
		$("#answer-incorrect").hide();
		$("#answer-correct").show();
	} else {
		$("#answer-correct").hide();
		$("#answer-incorrect").show();
	}
});

$("#answer-closer").click(function(){
	$('.answer').hide();
});

console.log(nextQ);


});