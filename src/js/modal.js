function showOrHideModal() {
  optionModal.classList.forEach((classElement) => {
    if (classElement === 'option__modalContainer--hide') {
      setValuesFromLocalStorage();
      optionModal.classList.remove('option__modalContainer--hide');
      optionModal.classList.add('option__modalContainer--show');
    }

    if (classElement === 'option__modalContainer--show') {
      saveOptionsToLocalStorage();
      optionModal.classList.remove('option__modalContainer--show');
      optionModal.classList.add('option__modalContainer--hide');
    }
  });
}
