const QuizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Question 2",
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    correct: "b",
  },
  {
    question: "Question 3",
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    correct: "c",
  },
  {
    question: "Question 4",
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.querySelector(".question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = QuizData[currentQuiz];

  questionEl.innerHTML = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", (e) => {
  const answer = getSelected();

  if (answer) {
    if (answer === QuizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < QuizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2> You answered ${score}/${QuizData.length} questions correctly </h2> 
      <button onclick='location.reload()'>Reload</button>`;
    }
  }
});
