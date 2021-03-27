function getValueByKey(key) {
  const localStoageOptions = localStorage.getItem('options');
  const isOptions = localStoageOptions && localStoageOptions.length > 10;
  const options = localStoageOptions && localStoageOptions.split(',');

  let value;
  let result;

  if (isOptions) {
    options.forEach((option) => {
      value = option.includes(key) && option.split(':')[1];
    });
  }

  switch (key) {
    case 'small':
      result = value === checkboxSmall.checked ? value : checkboxSmall.checked;
      break;
    case 'big':
      result = value === checkboxBig.checked ? value : checkboxBig.checked;
      break;
    case 'specialSymbol':
      result = value === checkboxSpecialSymbol.checked ? value : checkboxSpecialSymbol.checked;
      break;
    case 'symbol':
      result = value === checkboxSymbol.checked ? value : checkboxSymbol.checked;
      break;
    case 'number':
      result = value === checkboxNumber.checked ? value : checkboxNumber.checked;
      break;
    case 'length':
      result = value === passwordLength ? parseInt(value) : parseInt(passwordLength);
      passwordLength = parseInt(value);
      break;
    default:
      result = value;
      break;
  }

  return `${key}:${result}`;
}

function saveOptionsToLocalStorage() {
  const small = getValueByKey('small');
  const big = getValueByKey('big');
  const specialSymbol = getValueByKey('specialSymbol');
  const symbol = getValueByKey('symbol');
  const number = getValueByKey('number');
  const length = getValueByKey('length');

  localStorage.setItem('options', `${small},${big},${specialSymbol},${symbol},${number},${length}`);
}

function setValuesFromLocalStorage() {
  const localStoageOptions = localStorage.getItem('options');
  const isOptions = localStoageOptions && localStoageOptions.length > 10;
  const options = localStoageOptions && localStoageOptions.split(',');

  if (isOptions) {
    options.forEach((option) => {
      key = option.split(':')[0];
      value = option.split(':')[1];
      value = value == 'false' ? false : value == 'true' ? true : value;

      switch (key) {
        case 'small':
          checkboxSmall.checked = value;
          break;
        case 'big':
          checkboxBig.checked = value;
          break;
        case 'specialSymbol':
          checkboxSpecialSymbol.checked = value;
          break;
        case 'symbol':
          checkboxSymbol.checked = value;
          break;
        case 'number':
          checkboxNumber.checked = value;
          break;
        case 'length':
          passwordLengthElement.value = value;
          passwordLength = parseInt(value);
          break;
      }
    });
  }
}
