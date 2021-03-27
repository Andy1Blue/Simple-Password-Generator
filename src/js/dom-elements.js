let checkboxSmall = document.getElementById('small');
let checkboxBig = document.getElementById('big');
let checkboxSpecialSymbol = document.getElementById('special');
let checkboxSymbol = document.getElementById('symbol');
let checkboxNumber = document.getElementById('number');
let passwordInput = document.getElementById('pass');

let passwordLengthElement = document.getElementById('length');
let passwordLength = 30;
passwordLengthElement.addEventListener('change', () => {
  passwordLength = passwordLengthElement.value;
});

let optionButton = document.getElementById('optionButton');
let optionModal = document.getElementById('optionModal');
