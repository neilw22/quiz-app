$(document).ready(function(){

var counter = 0;

function question(question, option1, option2, option3, option4, correctOption) {
	this.question = question;
	this.option1 = option1;
	this.option2 = option2;
	this.option3 = option3;
	this.option4 = option4;
	this.correctOption = correctOption;
}

var question1 = new question("this is question 1" , "q1-opt1" , "q1-opt2" , "q1-opt3" , "q1-opt4" , "q1-opt1");
var question2 = new question("this is question 2" , "q2-opt1" , "q2-opt2" , "q2-opt3" , "q2-opt4" , "q2-opt1");
var question3 = new question("this is question 3" , "q3-opt1" , "q3-opt2" , "q3-opt3" , "q3-opt4" , "q3-opt1");
var question4 = new question("this is question 4" , "q4-opt1" , "q4-opt2" , "q4-opt3" , "q4-opt4" , "q4-opt1");

var questionArray = [question1, question2, question3, question4];

function bindData(){

	$("#q-content").text(questionArray[counter].question);
	$("#a1-content").text(questionArray[counter].option1);
	$("#a2-content").text(questionArray[counter].option2);
	$("#a3-content").text(questionArray[counter].option3);
	$("#a4-content").text(questionArray[counter].option4);
}

bindData();

function answer(clickElem){
	if(questionArray[counter].correctOption==clickElem.text()) {
		$("#answer-incorrect").hide();
		$("#answer-correct").show();
	} else {
		$("#answer-incorrect").show();
		$("#answer-correct").hide();
	}
}

$(".ans").click(function(){
	if (counter==4) {
		$('.answer').show();
		$('.overlay').show();
		$('.quiz-end').show();
	} else {
		answer($(this));
		$('.answer').show();
		$('.overlay').show();
		counter++;
		bindData();
	}
});

$("#answer-closer").click(function(){
if (counter==4) {
	$('.answer').show();
	$('.overlay').show();
	$('#quiz-end').show();
	$('#quiz-reset').show();
	$('#answer-closer').hide();
	} else {
	$('.answer').hide();
	$('.overlay').hide();
	}
});

$('#quiz-reset').click(function(){
	location.reload();
});


});