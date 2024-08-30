const questions = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "What does 'HTTP' stand for ?",
    options: [
      "HyperText Transfer Protocol",
      "High Text Transfer Protocol",
      "Hyper Tech Transmission Protocol",
      "Hyper Transfer Text Protocol",
    ],
    answer: "HyperText Transfer Protocol",
  },
  {
    question: "Which device is used primarily for data storage?",
    options: ["Server", "Switch", "Router", "Hard Drive"],
    answer: "Hard Drive",
  },
  {
    question: "What is cybersecurity focused on protecting?",
    options: ["Hardware", "Software", "Information", "Electricity"],
    answer: "Information",
  },
];

const display = document.querySelector(".display");
const submitBtn = document.querySelector(".btn");

let selectedOptionAnswer = "";
let numberCorrectSelectedAnswers = 0;
let questionNumberIndex = 0;
let selectedOption = questions[questionNumberIndex];

submitBtn.innerHTML = "Submit";

const DisplayQuestion = (data) => {
  selectedOptionAnswer = "";
  display.innerHTML = "";
  const html = `
    <div class="heading">
          <h1>${data.question}</h1>
        </div>
        <div class="options">
        ${data.options
          .map((option) => {
            return `
                <div class="option">
            <input type="radio" name="option" id="${option}" />
            <label for="${option}">${option}</label>
          </div>`;
          })
          .join(" ")}
        </div>
    `;

  display.insertAdjacentHTML("afterbegin", html);

  const options = document.querySelectorAll(".option input");

  options.forEach((option) => {
    option.addEventListener("change", (e) => {
      selectedOptionAnswer = e.target.nextElementSibling.innerHTML;
    });
  });
};

DisplayQuestion(questions[questionNumberIndex]);

const showResult = () => {
  console.log("show result");
  display.innerHTML = "";

  const html = `
        <h1 class='result'>Your have answered ${numberCorrectSelectedAnswers}/${questions.length} Correctly</h1>
        `;
  display.insertAdjacentHTML("afterbegin", html);
};

submitBtn.addEventListener("click", (e) => {
  if (selectedOptionAnswer !== "") {
    if (selectedOption.answer === selectedOptionAnswer) {
      numberCorrectSelectedAnswers++;
    }

    if (questionNumberIndex <= questions.length - 2) {
      console.log(questionNumberIndex);
      questionNumberIndex++;
      selectedOption = questions[questionNumberIndex];
      DisplayQuestion(questions[questionNumberIndex]);
      submitBtn.innerHTML = "Submit";
    } else {
      submitBtn.innerHTML = "Reload";
      showResult();
      questionNumberIndex = -1;
      numberCorrectSelectedAnswers = 0;
    }
  }
});
