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
        question: "Which thermodynamic process occurs when heat is added to a system and work is done by the system on its surroundings?",
        a: "Isobaric process",
        b: "Isothermal process",
        c: "Adiabatic process",
        d: "Isochoric process",
        correct: "c",
    },
    {
        question: "What is the term used to describe the tendency of a force to rotate an object about an axis?",
        a: "Torque",
        b: "Energy",
        c: "Power",
        d: "Work",
        correct: "a",
    },
    {
        question: "What is the term used to describe the rate of change of angular velocity with respect to time?",
        a: "Angular displacement",
        b: "Angular velocity",
        c: "Angular acceleration",
        d: "Linear accelration",
        correct: "c",
    },
    {
        question: "What is the term used to describe the resistance of a fluid to flow?",
        a: "Viscosity",
        b: "Tensile strength",
        c: "Surface tension",
        d: "Cohesion",
        correct: "a",
    }
]

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