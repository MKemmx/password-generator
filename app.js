const generateButton = document.getElementById("generateBtn");

// Slider Password Container
const passwordContainer = document.getElementById("passwordContainer");

// Slider
const slider = document.getElementById("sliderRange");
const upperCaseBox = document.getElementById("upperCase");
const lowerCaseBox = document.getElementById("lowerCase");
const numberCaseBox = document.getElementById("number");
const symbolCaseBox = document.getElementById("symbol");

const passwordLengthContainer = document.getElementById("passLength");
slider.addEventListener("change", (e) => {
  if (passwordLengthContainer.innerHTML) {
    passwordLengthContainer.innerHTML = "";
  }
  let passwordLength = e.target.value;
  passwordLengthContainer.innerHTML += passwordLength;
});

generateButton.addEventListener("click", () => {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const upperCaseLetters = alpha.map((x) => String.fromCharCode(x));
  const lowerCaseLetters = alpha.map((x) =>
    String.fromCharCode(x).toLowerCase()
  );
  const numbersMenu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const sysmbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"];

  let passwordLength = Number(slider.value);

  if (passwordLength <= 0) {
    return alert("Please slide chracter length");
  }

  //? Selected Generator
  let selectedGenerators = [];

  if (
    !upperCaseBox.checked &&
    !lowerCaseBox.checked &&
    !numberCaseBox.checked &&
    !symbolCaseBox.checked
  ) {
    return alert(`Please select generator!`);
  }

  if (upperCaseBox.checked) {
    selectedGenerators = [...selectedGenerators, ...upperCaseLetters];
  }

  if (lowerCaseBox.checked) {
    selectedGenerators = [...selectedGenerators, ...lowerCaseLetters];
  }

  if (numberCaseBox.checked) {
    selectedGenerators = [...selectedGenerators, ...numbersMenu];
  }

  if (symbolCaseBox.checked) {
    selectedGenerators = [...selectedGenerators, ...sysmbols];
  }

  let generatedPassword = [];

  for (let i = 0; i < passwordLength; i++) {
    let random =
      selectedGenerators[Math.floor(Math.random() * selectedGenerators.length)];
    generatedPassword.push(random);
  }

  passwordContainer.textContent = generatedPassword.join("");
});

// Copy Button
const copyButton = document.getElementById("copyBtn");

copyButton.addEventListener("click", () => {
  var copyText = passwordContainer.textContent;

  if (!copyText) {
    return alert("There is not password!");
  }

  navigator.clipboard.writeText(copyText);
  alert("Password copied!: " + copyText);
});
