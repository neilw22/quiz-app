$(document).ready(function(){

function question(q, opt1, opt2, opt3, opt4){
	this.q = q;
	this.opt1 = opt1;
	this.opt2 = opt2;
	this.opt3 = opt3;
	this.opt4 = opt4;
}

function answer(){

	$(".question-box").text(q2.q);
	$("#answer1").text(q2.opt1);
	$("#answer2").text(q2.opt2);
	$("#answer3").text(q2.opt3);
	$("#answer4").text(q2.opt4);
	$("#question-number").text("2");

}

var q2 = new question("this is question 2", "q2-opt1", "q2-opt2", "q2-opt3", "q2-opt4");
var q3 = new question("this is question 3", "q3-opt1", "q3-opt2", "q3-opt3", "q3-opt4");
var q4 = new question("this is question 4", "q4-opt1", "q4-opt2", "q4-opt3", "q4-opt4");
var q5 = new question("this is question 5", "q5-opt1", "q5-opt2", "q5-opt3", "q5-opt4");


$("#answer1").click(function(){
	answer();
});

$("#answer2").click(function(){
	answer();
});

$("#answer3").click(function(){
	answer();
});

$("#answer4").click(function(){
	answer();
});







});