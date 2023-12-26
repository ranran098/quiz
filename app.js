const quizData = [
    {
        question: "Kinsay pinakagwapa sa kalibutan?",
        a: "Dimpol",
        b: "Ambot",
        c: "IDK",
        d: "Secret",
        correct: "a",
    },
    {
        question: "bday ni ranran",
        a: "july 19, 2000",
        b: "july 19, 2001",
        c: "june 19, 2001",
        d: "june 19, 2000",
        correct: "b",
    },
    {
        question: "Fav scent ni ranran",
        a: "Perfume",
        b: "ambot",
        c: "newly cooked food",
        d: "ilok ni dimpol",
        correct: "d",
    },
    {
        question: "2+2",
        a: "4",
        b: "kuan",
        c: "Dimpol gwapa",
        d: "none of the above",
        correct: "c",
    },
   
];

const quiz = document.getElementById('quiz');
const answers = document.querySelectorAll('.answer'); 
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');
const submit = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    unselectAnswer();

    const currentQuiz = quizData[currentQuestion];

    questionElement.innerText = currentQuiz.question;
    a_text.innerHTML = currentQuiz.a;
    b_text.innerHTML = currentQuiz.b;
    c_text.innerHTML = currentQuiz.c;
    d_text.innerHTML = currentQuiz.d;
}

function unselectAnswer() {
    answers.forEach(answer => answer.checked = false);
}

function selectAnswer() {
    let selectedAnswer = undefined;
    answers.forEach(answer => {
        if (answer.checked) {
            selectedAnswer = answer.id;
        }
    });
    return selectedAnswer;
}
submit.addEventListener('click', () => {
    const selectedAnswer = selectAnswer();
    if (selectedAnswer === quizData[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `Your Score: ${score}`;
        let newEl = document.createElement('button');
        newEl.innerText = "Reload Quiz";
        newEl.classList.add('reload-btn')
        newEl.addEventListener('click', () => {
            location.reload();
        });
        quiz.appendChild(newEl);
    }
});


