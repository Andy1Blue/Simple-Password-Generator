function copyPassword() {
    const copyPassword = document.getElementById('pass');
  
    copyPassword.select();
  
    document.execCommand('copy');
  
    alert(`Copied the password: ${copyPassword.value}`);
  }
  