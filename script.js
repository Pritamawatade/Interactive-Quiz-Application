const quizData = [
    {
        question: "What does 'CSS' stand for in web development?",
        a: "Cascading Style Sheets",
        b: "Creative Style System",
        c: "Computer Style Sheets",
        d: "Colorful Style Sheets",
        correct: "a",
    },
    {
        question: "Which JavaScript method is used to select elements by class?",
        a: "getElementById",
        b: "querySelector",
        c: "getElementsByClassName",
        d: "querySelectorAll",
        correct: "c",
    },
    {
        question: "What is the output of 'console.log(typeof NaN)' in JavaScript?",
        a: "number",
        b: "NaN",
        c: "undefined",
        d: "object",
        correct: "a",
    },
    {
        question: "Which of the following is a JavaScript framework?",
        a: "React",
        b: "Laravel",
        c: "Django",
        d: "Flask",
        correct: "a",
    },
    {
        question: "What does 'SQL' stand for?",
        a: "Structured Query Language",
        b: "Sequential Query Language",
        c: "Server Query Language",
        d: "Short Query Language",
        correct: "a",
    }
];

const questionEl = document.getElementById('question-text');
const a_text = document.getElementById('label-a');
const b_text = document.getElementById('label-b');
const c_text = document.getElementById('label-c');
const d_text = document.getElementById('label-d');
const currentQuestionEl = document.getElementById('current-question');
const totalQuestionsEl = document.getElementById('total-questions');
const progressEl = document.getElementById('progress');
const finalScoreEl = document.getElementById('final-score');
const totalScoreEl = document.getElementById('total-score');
const scorePercentageEl = document.getElementById('score-percentage');
const scoreMessageEl = document.getElementById('score-message');

let currentQuiz = 0;
let score = 0;
let selectedAnswer = null;

loadQuiz();

document.getElementById('submit-btn').addEventListener('click', checkAnswer);
document.getElementById('next-btn').addEventListener('click', loadNextQuiz);
document.getElementById('restart-btn').addEventListener('click', restartQuiz);

// Add click event listeners to all answer options
function addAnswerOptionListeners() {
    document.querySelectorAll('.answer-option').forEach(option => {
        option.addEventListener('click', function() {
            if (this.classList.contains('disabled')) return;
            
            // Remove previous selection
            document.querySelectorAll('.answer-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Add selection to clicked option
            this.classList.add('selected');
            
            // Check the radio button
            const radioButton = this.querySelector('input[type="radio"]');
            radioButton.checked = true;
            selectedAnswer = radioButton;
            
            // Enable submit button
            document.getElementById('submit-btn').disabled = false;
        });
    });
}

totalQuestionsEl.textContent = quizData.length;
totalScoreEl.textContent = quizData.length;

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    progressEl.style.width = `${(currentQuiz / quizData.length) * 100}%`;
    currentQuestionEl.textContent = currentQuiz + 1;
    
    // Disable submit button until answer is selected
    document.getElementById('submit-btn').disabled = true;
    selectedAnswer = null;
    
    // Add click listeners to answer options
    addAnswerOptionListeners();
}

function deselectAnswers() {
    document.querySelectorAll('input[name="answer"]').forEach(input => input.checked = false);
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('correct', 'incorrect', 'disabled', 'selected');
    });
}

function getSelected() {
    return selectedAnswer;
}

function checkAnswer() {
    const selected = getSelected();
    if (!selected) {
        return;
    }

    const answerOptionEl = document.getElementById(`option-${selected.value}`);
    const correctOptionEl = document.getElementById(`option-${quizData[currentQuiz].correct}`);
    
    if (selected.id === quizData[currentQuiz].correct) {
        score++;
        answerOptionEl.classList.add('correct');
    } else {
        answerOptionEl.classList.add('incorrect');
        correctOptionEl.classList.add('correct');
    }

    document.querySelectorAll('.answer-option').forEach(option => option.classList.add('disabled'));
    document.getElementById('submit-btn').disabled = true;
    
    // Show score after last question
    if (currentQuiz === quizData.length - 1) {
        setTimeout(() => {
            showFinalScore();
        }, 1500);
    } else {
        updateButtonVisibility();
    }
}

function loadNextQuiz() {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
        updateButtonVisibility();
    } else {
        showFinalScore();
    }
}

function updateButtonVisibility() {
    document.getElementById('submit-btn').style.display = currentQuiz < quizData.length ? 'block' : 'none';
    document.getElementById('next-btn').style.display = currentQuiz < quizData.length - 1 ? 'block' : 'none';
    document.getElementById('restart-btn').style.display = currentQuiz === quizData.length ? 'block' : 'none';
}

function showFinalScore() {
    document.querySelector('.quiz-content').style.display = 'none';
    document.getElementById('result-section').style.display = 'block';
    finalScoreEl.textContent = score;
    const percentage = (score / quizData.length) * 100;
    scorePercentageEl.textContent = `${percentage}%`;

    if (percentage === 100) {
        scoreMessageEl.textContent = "🎉 Perfect Score! You're a coding genius! 🎉";
        scoreMessageEl.classList.add('excellent');
        createConfetti();
    } else if (percentage >= 70) {
        scoreMessageEl.textContent = "Great job! You have solid programming knowledge!";
        scoreMessageEl.classList.add('good');
    } else {
        scoreMessageEl.textContent = "Keep learning! Practice makes perfect!";
        scoreMessageEl.classList.add('average');
    }
}

function restartQuiz() {
    score = 0;
    currentQuiz = 0;
    selectedAnswer = null;
    document.querySelector('.quiz-content').style.display = 'block';
    document.getElementById('result-section').style.display = 'none';
    scoreMessageEl.classList.remove('excellent', 'good', 'average');
    
    // Remove any existing confetti
    const existingConfetti = document.querySelectorAll('.confetti');
    existingConfetti.forEach(confetti => confetti.remove());
    
    loadQuiz();
    updateButtonVisibility();
}

// Confetti effect function
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#98d8c8'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = Math.random() * 8 + 4 + 'px';
            confetti.style.height = confetti.style.width;
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 30);
    }
}
