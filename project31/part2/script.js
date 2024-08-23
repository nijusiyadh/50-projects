const copyBtn = document.querySelector(".copy");
const outputEl = document.querySelector(".password");
const symbolsEl = document.getElementById("symbols");
const numbersEl = document.getElementById("numbers");
const generateBtn = document.querySelector(".generate");
const lowecaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const passLengthEl = document.getElementById("password-length");

let includeSymbols = true;
let includeNumbers = true;
let includeLoweCase = true;
let includeUpperCase = true;
let passwordLength = passLengthEl.value;

// prettier-ignore
const NumbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const SymbolsArray = ["!", "@", "#", "$", "%", "&", "*", "-", ".", "?"];
// prettier-ignore
const UppercaseCaracters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
// prettier-ignore
const LowercaseCaraters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y", "z",];

uppercaseEl.addEventListener("change", (e) => {
  if (e.target.checked) {
    includeUpperCase = true;
  } else {
    includeUpperCase = false;
  }
});

lowecaseEl.addEventListener("change", (e) => {
  if (e.target.checked) {
    includeLoweCase = true;
  } else {
    includeLoweCase = false;
  }
});

numbersEl.addEventListener("change", (e) => {
  if (e.target.checked) {
    includeNumbers = true;
  } else {
    includeNumbers = false;
  }
});
symbolsEl.addEventListener("change", (e) => {
  if (e.target.checked) {
    includeSymbols = true;
  } else {
    includeSymbols = false;
  }
});

passLengthEl.addEventListener("input", (e) => {
  passwordLength = e.target.value;
});

const getRandomIndex = (max) => {
  const randomValue = Math.floor(Math.random() * max);
  return randomValue;
};

const selectedNumberOfRandomValue = (Array, number) => {
  let selectionArray = [];
  for (let i = 0; i < number; i++) {
    const index = getRandomIndex(Array.length);

    selectionArray.push(Array[index]);
  }
  return selectionArray;
};

const generatePassword = () => {
  //
  let selectedUpperCaseCaracters = [];
  let selectedLowerCaseCaracters = [];
  let selectedNumbers = [];
  let selectedSymbols = [];
  let finalArray = [];
  //upper case
  if (includeUpperCase) {
    selectedUpperCaseCaracters = selectedNumberOfRandomValue(
      UppercaseCaracters,
      passwordLength / 2
    );
  }
  // lowerrcase
  if (includeLoweCase) {
    selectedLowerCaseCaracters = selectedNumberOfRandomValue(
      LowercaseCaraters,
      passwordLength / 2
    );
  }
  // numbers
  if (includeNumbers) {
    selectedNumbers = selectedNumberOfRandomValue(
      NumbersArray,
      passwordLength / 2
    );
  }
  // symbols
  if (includeSymbols) {
    selectedSymbols = selectedNumberOfRandomValue(
      SymbolsArray,
      passwordLength / 2
    );
  }

  // prettier-ignore
  const TotalSelectedCharacters = [...selectedUpperCaseCaracters,...selectedLowerCaseCaracters,...selectedNumbers,...selectedSymbols];

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = getRandomIndex(TotalSelectedCharacters.length);
    finalArray.push(TotalSelectedCharacters[randomIndex]);
  }

  outputEl.innerHTML = finalArray.join("");
};

generateBtn.addEventListener("click", (e) => {
  generatePassword();
});

copyBtn.addEventListener("click", (e) => {
  if (outputEl.innerHTML !== "") {
    navigator.clipboard.writeText(outputEl.innerHTML);
    alert("copied to clipboard");
    outputEl.innerHTML = "";
  } else {
    alert("generate a password first");
  }
});