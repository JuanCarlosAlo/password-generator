const form = document.getElementById('password-generator-options');
const generateButton = document.getElementById('button-generate');
const characterLength = document.getElementById(
  'password-generator-length-number'
);
const lengthValue = document.getElementById('password-generator-range');
const passwordGenerated = document.getElementById('password-generated');

const upperElement = document.getElementById('uppercase');
const lowerElement = document.getElementById('lowercase');
const numberElement = document.getElementById('numbers');
const symbolElement = document.getElementById('symbols');

const alphabet = 'abcdefghijklmnñopqrstuvwxyz';
const alphabetUpperCase = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!"#$%&()*+,-./:<=>?@[]^`{}|';

let allCharactersAllowed = '';

allCharactersAllowed = passwordGenerated.value;

const generateStrign = lenght => {
  let newString = '';
  console.log(newString);
  for (let index = 0; index < allCharactersAllowed.length; index++) {
    newString = allCharactersAllowed.charAt(Math.random(index));
  }
};

generateButton.addEventListener('click', () => {
  generateStrign();
});

form.addEventListener('change', e => {
  const containsUpper = upperElement.checked;
  const containslower = lowerElement.checked;
  const containsnumber = numberElement.checked;
  const containssymbol = symbolElement.checked;
  let = characterLength.textContent = lengthValue.value;
  let password = '';

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
  console.log(allCharactersAllowed);
});
