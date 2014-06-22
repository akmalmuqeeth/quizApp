$(document).ready(function(){
	
	var qBank = new QuestionBank();
	var questions = qBank.getQuestions();

	setQuestion(questions);

	$("#submitButton").click(function() {
		//if answer is not selected, alert user
		if(selectedAnswerIndex == -1) {
			alert("Please select an answer.");
		} else {

		//update scores
		updateScores(questions);

		//set next question
		updateIndexes();
		setQuestion(questions);
		
		}

	});

	$(".answerBox").each(function(){
		$(this).click(function(){
			selectedAnswerIndex = $(this).data("answerindex")
		});

	});
	
});

function Question(questionText, answers, correctAnswerIndex) {
	this.questionText = questionText;
	this.answers = answers;
	this.correctAnswerIndex= correctAnswerIndex;
}

function QuestionBank() {
		var q1 = new Question("Who wrote the Harry Potter series ?",
		['J K Rowling','Roald Dahl','J R Tolkiens','Stevan Sehgal'],
		0);
	var q2 = new Question("Who killed Harry's parents ?",
		['Severus Snape','Albus Dumbledore','Lord Voldemort','Prof Quirell'],
		2);
	var q3 = new Question("Who was the half blood prince",
		['James Potter','Sirius Black','Remus Lupin','Severus Snape'],
		3);

	this.getQuestions = function() {
		return [q1,q2,q3];
	};
}

var currentQnIndex = 0;
var scores = 0;
var selectedAnswerIndex = -1;


function setQuestion(questions) {
	if(currentQnIndex == questions.length ){
		currentQnIndex =0;
		scores = 0;
	}
	var qn = questions[currentQnIndex]

	$("#questionTextID").text(qn.questionText);
	$("#ans1").text(qn.answers[0]);
	$("#ans2").text(qn.answers[1]);
	$("#ans3").text(qn.answers[2]);
	$("#ans4").text(qn.answers[3]);
}

function updateScores(questions) {
	var correctAnswerIndex = questions[currentQnIndex].correctAnswerIndex
	console.log("ans: "+correctAnswerIndex+" currentQnIndex" + currentQnIndex);
	if(correctAnswerIndex == selectedAnswerIndex){
		scores = scores + 20;
		console.log(scores);
	}
	
}

function updateIndexes(){
	currentQnIndex++;
	selectedAnswerIndex = -1;
}


