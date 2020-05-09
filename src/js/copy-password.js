function copyPassword() {
    const copyPassword = document.getElementById('pass');
  
    copyPassword.select();
  
    document.execCommand('copy');

    copyPassword.blur();

    alert(`Copied the password: ${copyPassword.value}`);
  }
  