$(document).ready(function(){
	
	var qBank = new QuestionBank();
	var questions = qBank.getQuestions();
	var tracker = new Tracker();

	// start the quiz when all questions are asked
	if(tracker.getCurrentQuestionIndex() == questions.length ){
		tracker.reset();
	}

	// display the current question
	setQuestion(questions[tracker.getCurrentQuestionIndex()],
		tracker.getCurrentQuestionIndex() + 1,
		questions.length);


	$("#submitButton").click(function() {
		//if answer is not selected, alert user
		if(tracker.isNoAnswerSelected()) {
			alert("Please select an answer.");
		} else {
			//update scores
			updateScores(questions,tracker);

			//go to next question
			proceedToNextQuestion(tracker,questions);
		}

	});

	$(".answerBox").each(function(){
    	//higlight the answer when click
    	$(this).click(function(){
    		$('.answerBox').each(function(){
				$(this).removeClass('highlight');
    		});
    		$(this).addClass('highlight');

    		//set the clicked answerBox as the answer
    		tracker.updateSelectedAnswer($(this).data("answerindex"));
    	});

    });

	//skip question
	$("#skippedCount").text(tracker.getSkippedQnCount());
    $("#skipQuestion").click(function(){
    	proceedToNextQuestion(tracker,questions);
    	tracker.incrementSkippedQnCount();
    	$("#skippedCount").text(tracker.getSkippedQnCount());
    });
	
});

function setQuestion(qn, questionNumber, totalQuestions) {
	var questionText = "["+questionNumber+"/"+totalQuestions+"] "+qn.questionText;
	$("#questionTextID").text(questionText);
	$("#ans1").text(qn.answers[0]);
	$("#ans2").text(qn.answers[1]);
	$("#ans3").text(qn.answers[2]);
	$("#ans4").text(qn.answers[3]);
	$("#qimage").attr("src",qn.questionImage);
	$("#qimage").addClass(qn.imageEffect);

}

function updateScores(questions, tracker) {
	var currentQuestion = questions[tracker.getCurrentQuestionIndex()];
	if(tracker.isCorrectAnswer(currentQuestion.correctAnswerIndex)){
		tracker.increaseScore(20);
		$("#score_line_1").text("Correct answer: Your score is:"+tracker.getScore());
		$("#score_line_1").removeClass("incorrectAnswer").addClass("correctAnswer");
	} else {
		$("#score_line_1").text("Oops! Incorrect answer. Your current score is:"+tracker.getScore());
		$("#score_line_1").removeClass("correctAnswer").addClass("incorrectAnswer");
	}
	
}

function proceedToNextQuestion(tracker, questions){
	tracker.goToNextQuestion();
	if(tracker.getCurrentQuestionIndex() == questions.length ){
		tracker.reset();
	}
	setQuestion(questions[tracker.getCurrentQuestionIndex()],
		tracker.getCurrentQuestionIndex() + 1,
		questions.length);
	$('.answerBox').each(function(){
		$(this).removeClass('highlight');
	});
}



