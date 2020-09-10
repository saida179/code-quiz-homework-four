//# 04 Web APIs: Code Quiz
const startButton = document.querySelector('#start-btn');
const questionContainer = document.querySelector ('#question');
const quizContainer = document.querySelector('#quiz');
const resultsContainer = document.querySelector('#results');
const submitButton = document.querySelector('#submit');
const timerLeft = document.querySelector('#timer');

let answer1 = document.querySelector('#a');
let answer2 = document.querySelector('#b');
let answer3 = document.querySelector('#c');
let answer4 = document.querySelector('#d');

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
    startButton.addEventListener('click', generateQuiz);
    console.log ('started')

//functions
function countDown(){
    setInterval(function() {
        if (timeLeft <=0){
            clearInterval(timeLeft = 0)
        }
        timeLeftDisplay.innerHTML = timeLeft 
        timeLeft -=1

    }, 1000)
}

function start(){

}

	function showQuestions(questions, quizContainer){
	let output = [];
	let answers;

	for(let i=0; i<questions.length; i++){
		answers = ["d,c,a,a,a,d,b,b,d,c"];

		// for each available answer to this question...
		for(letter in questions[i].answers){
            let answer1 = document.querySelector('#a');
            let answer2 = document.querySelector('#b');
            let answer3 = document.querySelector('#c');
            let answer4 = document.querySelector('#d');
        }
	}

	quizContainer.innerHTML = output.join('');

	}

	function showResults(questions, quizContainer, resultsContainer){
	let answerContainers = quizContainer.querySelectorAll('.answers');
	
	let userAnswer = 'a,b,c,d';
	let numCorrect = 0;
	

	for(let i=0; i<questions.length; i++){
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		if(userAnswer===questions1[i].correctAnswer){
            console.log(answers[0])
			numCorrect++;
		}
		else (userAnswer===questions1[i].incorrectAnswer) {
            message = 'incorrectAnswer';
        }
        if(userAnswer===questions2[i].correctAnswer){
            console.log(answers[1])
			numCorrect++;
		}
		else (userAnswer===questions2[i].incorrectAnswer) {
            message = 'incorrectAnswer';
        }
        if(userAnswer===questions3[i].correctAnswer){
            console.log(answers[2])
			numCorrect++;
		}
		else (userAnswer===questions3[i].incorrectAnswer) {
            message = 'incorrectAnswer';
        }
        if(userAnswer===questions4[i].correctAnswer){
            console.log(answers[3])
			numCorrect++;
		}
		else (userAnswer===questions4[i].incorrectAnswer) {
            message = 'incorrectAnswer';
        }
        
	}

	// show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    

	}


    showQuestions(questions, quizContainer);
    
    let myQuestions = [
        {
            question1: "1. Who would you usually hear making a prophecy?:",
            answers: {
                a: 'A Sage',
                b: 'A Predicator',
                c: 'A Diviner',
                d: 'A Seer'
            },
            correctAnswer: 'd'
        },
        {
            question2: "2. What was the name of Sybil Trelawney's famous Seer relative?",
            answers: {
                a: 'Caitlin',
                b: 'Roberta',
                c: 'Cassandra',
                d: 'Muriel'
            },
            correctAnswer: 'c'
        },
        {
            question3: "3. Who witnessed Sybil Trelawney making the whole prophecy that was responsible for Lord Voldemort hunting down the Potters?",
            answers: {
                a: 'Albus Dumbledore',
                b: 'Horace Slughorn',
                c: 'Peter Pettigrew',
                d: 'Aberforth Dumbledore'
            },
            correctAnswer: 'a'
        },
        {
            question4: "4. Who overheard some of the prophecy in question 3 being made in the Hog's head?",
            answers: {
                a: 'Severus Snape',
                b: 'Peter Pettigrew',
                c: 'Bellatrix Lestrangr',
                d: 'Lord Voldemort'
            },
            correctAnswer: 'a'
            
        },
        {
            question5: "5. Complete this line of Trelawney's prophecy:Born to those who have thrice defied him, born as the?",
            answers: {
                a: 'Seventh month dies',
                b: 'eighth month dies',
                c: 'twelfth month dies',
                d: 'second month dies'
            },
            correctAnswer: 'a'
            
		},
		{
            question6: "6. The word of the prophecy in the previous question could have applied to another wizard boy. Who was it?",
            answers: {
                a: 'Ron Weasley',
                b: 'Alexander Bones',
                c: 'Draco Malfoy',
                d: 'Neville Longbottom'
            },
            correctAnswer: 'd'
            
		},
		{
            question7: "7. Which of these match Professor Trelawney's intials on the label with the prophecy she made about the one with the power tp vanquish the Dark Lord?",
            answers: {
                a: 'S.C.T',
                b: 'S.P.T',
                c: 'S.A.T',
                d: 'S.M.T'
            },
            correctAnswer: 'b'
            
		},
		{
            question8: "8. who witnessed the prophecy sybil Trelawney made in Harry Potter and the Prisoner of Azkaban?",
            answers: {
                a: 'Harry Potter',
                b: 'Sirius Black ',
                c: 'Lavender Brown',
                d: 'Ron Weasley'
            },
            correctAnswer: 'b'
            
		},
		{
            question9: "9. When did Sybil Trelawney make a prophecy during Harry's third year at Hogwarts?",
            answers: {
                a: 'During Harrys first Divination lesson',
                b: 'At Christmas Dinner in the Great Hall',
                c: 'In the hospital wing',
                d: 'During Harrys Divination exam'
            },
            correctAnswer: 'd'
            
		},
		{
            question10: "10. Who was the Dark Lord's servant who had 'been chained these twelve years' according to trelawney's prophecy??",
            answers: {
                a: 'Pete Pettigrew',
                b: 'Barty Crouch junior',
                c: 'Severus Snape',
                d: 'Sirius Black'
            },
            correctAnswer: 'c'
            
		}

    ];

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
