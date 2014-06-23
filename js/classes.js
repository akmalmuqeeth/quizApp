
function Question(questionText, answers, correctAnswerIndex,questionImage) {
	this.questionText = questionText;
	this.answers = answers;
	this.correctAnswerIndex= correctAnswerIndex;
	this.questionImage = questionImage;
}

function QuestionBank() {
		var q1 = new Question("Who wrote the Harry Potter series ?",
		['J K Rowling','Roald Dahl','J R R Tolkiens','Steven Segal'],
		0,"images/q1.gif");
	var q2 = new Question("Who killed Harry's parents ?",
		['Severus Snape','Albus Dumbledore','Lord Voldemort','Prof Quirell'],
		2,"images/q2_a.jpg");
	
	var q3 = new Question("Who was the half blood prince ?",
		['James Potter','Sirius Black','Remus Lupin','Severus Snape'],
		3,"images/q3_a.jpg");

	var q4 = new Question("Where did the sorting hat ALMOST put harry in?",
		['Hufflepuff','Slytherin','Ravenclaw','Detention'],
		1,"images/q4.jpg");
	
	var q5 = new Question("What subject does Prof.Mc Gonagall teach?",
		['Transfiguration','Defence against the dark arts','Divination','History'],
		0,"images/q5.jpg");

	
	var q6 = new Question("What position does Harry play at in the Gryffindor Quidditch Team?",
		['Chaser','Beater','Goalie','Seeker'],
		3,"images/q6.jpg");
	
	var q7 = new Question("What is Fluffy?",
		['A Hippogriff','A three headed dog','A talking snake','A dementor'],
		1,"images/q7.jpeg");
	
	var q8 = new Question("What wizard does Dumbledore defeat in 1945?",
		['Lord Voldemort','Sirius Black','Grindelward','Nicolas Flamel'],
		2,"images/q8.jpg");
	
	var q9 = new Question("I'm often very stern.I wear my hair up in a bun.I'm really very fair. I find Quidditch very fun.",
		['Hermoine Granger','Sybill Trelawny','Lily Potter','Prof. Mc Gonagall'],
		3,"images/q9.jpg");

	this.getQuestions = function() {
		return [q1,q2,q3,q4,q5,q6,q7,q8,q9];
	};
}

function Tracker(){
	var currentQuestionIndex = 0;
	var selectedAnswerIndex = -1;
	var score = 0;

	this.getCurrentQuestionIndex = function(){
		return currentQuestionIndex;
	}

	this.increaseScore = function(points) {
		score = score + points;
	}

	this.getScore = function(){
		return score;
	}
	this.reset = function(){
		currentQuestionIndex =0;
		score = 0;
	}

	this.resetQuestionIndexes = function(){
		currentQuestionIndex++;
		selectedAnswerIndex = -1;
	}

	this.isNoAnswerSelected = function(){
		return selectedAnswerIndex == -1
	}

	this.isCorrectAnswer = function(ansIndex){
		return ansIndex == selectedAnswerIndex;
	}

	this.updateSelectedAnswer = function(selected){
		selectedAnswerIndex = selected;
	}
}