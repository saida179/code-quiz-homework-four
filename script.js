//# 04 Web APIs: Code Quiz

//As you proceed in your career as a web developer, 
//you will probably be asked to complete a coding assessment,
// which is typically a combination of multiple-choice questions and interactive challenges. 
//Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically 
//updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface 
//and be responsive, ensuring that it adapts to multiple screen sizes.

//## User Story

//```
//AS A coding bootcamp student
//I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
//SO THAT I can gauge my progress compared to my peers
//```

//## Acceptance Criteria

//```
//GIVEN I am taking a code quiz
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
	var output = [];
	var answers;

	// for each question...
	for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');

	}

	function showResults(questions, quizContainer, resultsContainer){
        // gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;

	}

	// show the questions
    showQuestions(questions, quizContainer);
    
    const myQuestions = [
        {
            question: "1. Who would you usually hear making a prophecy?:",
            answers: {
                a: 'A Sage',
                b: 'A Predicator',
                c: 'A Diviner',
                d: 'A Seer'
            },
            correctAnswer: 'd'
        },
        {
            question: "2. What was the name of Sybil Trelawney's famous Seer relative?",
            answers: {
                a: 'Caitlin',
                b: 'Roberta',
                c: 'Cassandra',
                d: 'Muriel'
            },
            correctAnswer: 'c'
        },
        {
            question: "3. Who witnessed Sybil Trelawney making the whole prophecy that was responsible for Lord Voldemort hunting down the Potters?",
            answers: {
                a: 'Albus Dumbledore',
                b: 'Horace Slughorn',
                c: 'Peter Pettigrew',
                d: 'Aberforth Dumbledore'
            },
            correctAnswer: 'a'
        },
        {
            question: "4. Who overheard some of the prophecy in question 3 being made in the Hog's head?",
            answers: {
                a: 'Severus Snape',
                b: 'Peter Pettigrew',
                c: 'Bellatrix Lestrangr',
                d: 'Lord Voldemort'
            },
            correctAnswer: 'a'
            
        },
        {
            question: "5. Complete this line of Trelawney's prophecy:Born to those who have thrice defied him, born as the?",
            answers: {
                a: 'Seventh month dies',
                b: 'eighth month dies',
                c: 'twelfth month dies',
                d: 'second month dies'
            },
            correctAnswer: 'a'
            
		},
		{
            question: "6. The word of the prophecy in the previous question could have applied to another wizard boy. Who was it?",
            answers: {
                a: 'Ron Weasley',
                b: 'Alexander Bones',
                c: 'Draco Malfoy',
                d: 'Neville Longbottom'
            },
            correctAnswer: 'd'
            
		},
		{
            question: "7. Which of these match Professor Trelawney's intials on the label with the prophecy she made about the one with the power tp vanquish the Dark Lord?",
            answers: {
                a: 'S.C.T',
                b: 'S.P.T',
                c: 'S.A.T',
                d: 'S.M.T'
            },
            correctAnswer: 'b'
            
		},
		{
            question: "8. who witnessed the prophecy sybil Trelawney made in Harry Potter and the Prisoner of Azkaban?",
            answers: {
                a: 'Harry Po',
                b: 'Peter Pettigrew',
                c: 'Bellatrix Lestrangr',
                d: 'Lord Voldemort'
            },
            correctAnswer: 'a'
            
		},
		{
            question: "9. ?",
            answers: {
                a: 'Severus Snape',
                b: 'Peter Pettigrew',
                c: 'Bellatrix Lestrangr',
                d: 'Lord Voldemort'
            },
            correctAnswer: 'a'
            
		},
		{
            question: "10. ?",
            answers: {
                a: 'Severus Snape',
                b: 'Peter Pettigrew',
                c: 'Bellatrix Lestrangr',
                d: 'Lord Voldemort'
            },
            correctAnswer: 'a'
            
		}

    ];

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score
//```

//The following animation demonstrates the application functionality:

//![code quiz](./Assets/04-web-apis-homework-demo.gif)