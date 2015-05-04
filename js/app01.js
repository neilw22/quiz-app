$(document).ready(function(){

var counter = 0;
var correctGuess = 0;

function question(questionNumber, question, option1, option2, option3, option4, correctOption, answerDescription) {
	this.questionNumber = questionNumber;
	this.question = question;
	this.option1 = option1;
	this.option2 = option2;
	this.option3 = option3;
	this.option4 = option4;
	this.correctOption = correctOption;
	this.answerDescription = answerDescription;
}

var question1 = new question("1", "Which of the following man made structures is visible from outer-space?" , "The Great Wall of China" , "The Pyramids of Egypt" , "Both" , "Neither" , "The Pyramids of Egypt", "It is often believed the Great Wall of China is visible from space, but the only man made structure that can be seen are the pyramids");
var question2 = new question("2", "A human being uses what percentage of their brains?" , "10%" , "25%" , "50%" , "100%" , "100%", "Humans do in fact use every part of their brain");
var question3 = new question("3", "What percentage of the English language is commonly used by an average speaker?" , "70 to 80%" , "40 to 50%" , "10 to 20%" , "5 to 10%" , "5 to 10%", "The average native English speaker has a vocabulary of 20 000 words out of 171 000 words in common use, and close to 1 million in existence");
var question4 = new question("4", "Most dreaming takes place at what part of a the normal sleeping pattern?" , "Drifting off" , "Deep Sleep" , "Any part of the sleep cycle" , "Just before waking" , "Any part of the sleep cycle", "New research suggests that even in early parts of sleep we are dreaming but that these dreams are usually forgotten because of the way they are being processed");

var questionArray = [question1, question2, question3, question4];

function bindData(){
	$("#question-number").text(questionArray[counter].questionNumber);
	$("#q-content").text(questionArray[counter].question);
	$("#a1-content").text(questionArray[counter].option1);
	$("#a2-content").text(questionArray[counter].option2);
	$("#a3-content").text(questionArray[counter].option3);
	$("#a4-content").text(questionArray[counter].option4);
}

bindData();
imageDisplay();

function imageDisplay(){
	if (counter==0) {
		$("#image1").fadeIn();
		$("#image2, #image3, #image4").hide();
	} else if (counter==1) {
		$("#image2").fadeIn();
		$("#image1, #image3, #image4").hide();
	} else if (counter==2) {
		$("#image3").fadeIn();
		$("#image1, #image2, #image4").hide();
	} else if (counter==3) {
		$("#image4").fadeIn();
		$("#image1, #image2, #image3").hide();
	}
}

function answer(clickElem){
	if(questionArray[counter].correctOption==clickElem.text()) {
		$("#answer-incorrect").hide();
		$("#answer-correct").show();
		correctGuess++;
		} else {
		$("#answer-incorrect").show();
		$("#answer-correct").hide();
	}
}

$(".ans").click(function(){
		answer($(this));
		$('.answer').slideDown();
		$('.overlay').fadeIn();
		$('.ans').slideUp();
		// $('.image-box').slideUp();
		$('.question-box').slideUp();
		$("#answer-description").text(questionArray[counter].answerDescription);
		counter++;
		bindData();
});

$("#answer-closer").click(function(){
if (counter==4) {
	$('.answer').show();
	$('.overlay').show();
	$('#quiz-end').append("You answered "+correctGuess+" questions correctly!")
	$('#quiz-end').show();
	$('#quiz-reset').show();
	$('#answer-closer').hide();
	$('#answer-description').hide();
	} else {
	$('#feedback-panel').text("Correct Answers: "+correctGuess);
	$('.answer').slideUp();
	$('.overlay').fadeOut();
	$('.image-box').slideDown();
	$('.question-box').slideDown();
	$('.ans').slideDown();
	imageDisplay();
	}
});

$('#quiz-reset').click(function(){
	location.reload();
});

$('.question-panel, .answer-panel').fadeIn(900);
$('.image-box, .question-box, .ans').slideDown(1200);

});