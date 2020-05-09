function copyPassword() {
  passwordInput.select();

  document.execCommand('copy');

  passwordInput.blur();

  alert(`Copied the password: ${passwordInput.value}`);
}
