$(document).ready(function(){
	
	var qBank = new QuestionBank();
	var questions = qBank.getQuestions();
	var tracker = new Tracker();

	if(tracker.getCurrentQuestionIndex() == questions.length ){
		tracker.reset();
	}

	setQuestion(questions[tracker.getCurrentQuestionIndex()]);

	$("#submitButton").click(function() {
		//if answer is not selected, alert user
		if(tracker.isNoAnswerSelected()) {
			alert("Please select an answer.");
		} else {
			//update scores
			updateScores(questions,tracker);

			//set next question
			tracker.resetQuestionIndexes();
			if(tracker.getCurrentQuestionIndex() == questions.length ){
				tracker.reset();
			}
			setQuestion(questions[tracker.getCurrentQuestionIndex()]);

		}

	});

	$(".answerBox").each(function(){

		$(this).mouseenter(function(){
			$(this).css('background-color','#E8FFFF');
		}).mouseleave(function(){
			var color = $(this).data("color")
			$(this).css('background-color',color);
		});

    	//select the answer on click
    	$(this).click(function(){
    		tracker.updateSelectedAnswer($(this).data("answerindex"))
    		// $(this).css('background-color','#E8FFFF');

    	});

    });
	
});


function setQuestion(qn) {
	$("#questionTextID").text(qn.questionText);
	$("#ans1").text(qn.answers[0]);
	$("#ans2").text(qn.answers[1]);
	$("#ans3").text(qn.answers[2]);
	$("#ans4").text(qn.answers[3]);
	$("#qimage").attr("src",qn.questionImage);
}

function updateScores(questions, tracker) {
	var correctAnswerIndex = questions[tracker.getCurrentQuestionIndex()].correctAnswerIndex
	console.log("ans: "+correctAnswerIndex+" currentQnIndex" + tracker.getCurrentQuestionIndex());
	if(tracker.isCorrectAnswer(correctAnswerIndex)){
		tracker.increaseScore(20);
		$("#score").text(tracker.getScore());
		console.log(tracker.getScore());
	}
	
}



