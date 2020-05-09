function generatePassword() {
  let newPassword = '';

  for (let i = 0; i < passwordLength; i++) {
    if (checkboxSmall.checked === true) {
      newPassword += possibleSmall.charAt(
        Math.floor(Math.random() * possibleSmall.length)
      );
    }

    if (checkboxBig.checked === true) {
      newPassword += possibleBig.charAt(
        Math.floor(Math.random() * possibleBig.length)
      );
    }

    if (checkboxSpecialSymbol.checked === true) {
      newPassword += possibleSpecialSymbol.charAt(
        Math.floor(Math.random() * possibleSpecialSymbol.length)
      );
    }

    if (checkboxSymbol.checked === true) {
      newPassword += possibleSymbol.charAt(
        Math.floor(Math.random() * possibleSymbol.length)
      );
    }

    if (checkboxNumber.checked === true) {
      newPassword += possibleNumber.charAt(
        Math.floor(Math.random() * possibleNumber.length)
      );
    }
  }

  newPassword = newPassword.substring(0, passwordLength);
  pa.value = newPassword;
}
