function generatePassword() {
  const checkboxSmall = document.getElementById('small');
  const checkboxBig = document.getElementById('big');
  const checkboxSpecialSymbol = document.getElementById('special');
  const checkboxSymbol = document.getElementById('symbol');
  const checkboxNumber = document.getElementById('number');
  const passwordLength = document.getElementById('length').value;
  const pa = document.getElementById('pass');

  const possibleSmall = 'abcdefghijklmnopqrstuvwxyz';
  const possibleBig = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const possibleNumber = '0123456789';
  const possibleSymbol = '!@#$%&';
  const possibleSpecialSymbol = '*()_+{}:<>?[]';
  let newPass = '';

  for (let i = 0; i < passwordLength; i++) {
    if (checkboxSmall.checked === true) {
      newPass += possibleSmall.charAt(
        Math.floor(Math.random() * possibleSmall.length)
      );
    }

    if (checkboxBig.checked === true) {
      newPass += possibleBig.charAt(
        Math.floor(Math.random() * possibleBig.length)
      );
    }

    if (checkboxSpecialSymbol.checked === true) {
      newPass += possibleSpecialSymbol.charAt(
        Math.floor(Math.random() * possibleSpecialSymbol.length)
      );
    }

    if (checkboxSymbol.checked === true) {
      newPass += possibleSymbol.charAt(
        Math.floor(Math.random() * possibleSymbol.length)
      );
    }

    if (checkboxNumber.checked === true) {
      newPass += possibleNumber.charAt(
        Math.floor(Math.random() * possibleNumber.length)
      );
    }
  }

  newPass = newPass.substring(0, passwordLength);

  pa.value = newPass;
}

function copyPassword() {
  const copyPassword = document.getElementById('pass');

  copyPassword.select();

  document.execCommand('copy');

  alert(`Copied the password: ${copyPassword.value}`);
}

$(function() {
  $('.options').toggle();
  $('#options-span').click(function() {
    $('.options').slideToggle(500);
  });
});
