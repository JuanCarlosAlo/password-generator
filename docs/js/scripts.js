const form = document.getElementById("password-generator-options");
const generateButton = document.getElementById("button-generate");
const characterLength = document.getElementById(
  "password-generator-length-number"
);
const lengthValue = document.getElementById("password-generator-range");
const passwordGenerated = document.getElementById("password-generated");
const strengthValue = document.getElementById("strength-value");

const upperElement = document.getElementById("uppercase");
const lowerElement = document.getElementById("lowercase");
const numberElement = document.getElementById("numbers");
const symbolElement = document.getElementById("symbols");

const alphabet = "abcdefghijklmnñopqrstuvwxyz";
const alphabetUpperCase = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = '!"#$%&()*+,-./:<=>?@[]^`{}|';
const passwordStrengthMessages = ["TOO WEAK!", "WEAK", "MEDIUM", "STRONG"];

let allCharactersAllowed = "";

const checkInputsChecked = () => document.querySelectorAll("input:checked");

const generateStrign = (length) => {
  let newString = "";

  for (let index = 1; index < length; index++) {
    newString += allCharactersAllowed.charAt(
      Math.floor(Math.random() * allCharactersAllowed.length)
    );
  }
  passwordGenerated.value = newString;
  console.log(newString);
};

const setStrengthValue = (optionsChecked) => {
  if (lengthValue.value < 5) {
    strengthValue.textContent = "TOO SHORT";
  } else if (
    !upperElement.checked &&
    !lowerElement.checked &&
    !numberElement.checked &&
    !symbolElement.checked
  ) {
    strengthValue.textContent = "NO OPTIONS CHECKED";
  } else {
    strengthValue.textContent =
      passwordStrengthMessages[optionsChecked.length - 1];
  }
};

form.addEventListener("change", (e) => {
  const containsUpper = upperElement.checked;
  const containslower = lowerElement.checked;
  const containsnumber = numberElement.checked;
  const containssymbol = symbolElement.checked;
  let = characterLength.textContent = lengthValue.value;
  const optionsChecked = checkInputsChecked();
  let password = "";

  if (containsUpper) {
    password += alphabetUpperCase;
  }
  if (containslower) {
    password += alphabet;
  }
  if (containsnumber) {
    password += numbers;
  }
  if (containssymbol) {
    password += symbols;
  }
  allCharactersAllowed = password;

  if (lengthValue.value > 5 && optionsChecked.length > 0) {
    generateButton.removeAttribute("disabled");
  } else {
    generateButton.setAttribute("disabled", "");
  }

  generateStrign(characterLength.textContent);

  setStrengthValue(optionsChecked);
});

form.addEventListener("submit", () => {
  e.preventDefault();
});
