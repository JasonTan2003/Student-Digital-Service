const quiz = document.getElementById('quiz')
const questionEl = document.getElementById("question")
const answerEls = document.querySelectorAll('.answer')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0

const quizData = [
    {
        question: "What is the primary function of a compiler?",
        a: "To translate high-level programming languages into machine code",
        b: "To translate machine code into high-level programming languages",
        c: "To debug code",
        d: "To optimize code for faster execution",
        correct: "a",
    },
    {
        question: "Which data structure is best suited for implementing a stack?",
        a: "Array",
        b: "Linked List",
        c: "Queue",
        d: "Tree",
        correct: "b",
    },
    {
        question: "Which of the following is NOT a type of loop?",
        a: "While loop",
        b: "For loop",
        c: "Do-while loop",
        d: "Switch loop",
        correct: "d",
    },
    {
        question: "Which sorting algorithm has the worst time complexity?",
        a: "Bubble sort",
        b: "Insertion sort",
        c: "Selection sort",
        d: "Quick sort",
        correct: "a",
    }
];



 loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false))
}

function getSelected() {
    let answer
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
        }
    }
    loadQuiz()
})