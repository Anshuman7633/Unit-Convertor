function convert() {
  var kilometers = parseFloat(document.getElementById('kilometers').value);
  var unit = document.getElementById('unit').value;
  var result = document.getElementById('result');

  if (isNaN(kilometers)) {
    result.innerHTML = 'Please enter a valid number of kilometers.';
    return;
  }

  var convertedValue;

  switch (unit) {
    case 'm':
      convertedValue = kilometers * 1000;
      result.innerHTML = kilometers + ' kilometers is equal to ' + convertedValue + ' meters.';
      break;
    case 'cm':
      convertedValue = kilometers * 100000;
      result.innerHTML = kilometers + ' kilometers is equal to ' + convertedValue + ' centimeters.';
      break;
    case 'mm':
      convertedValue = kilometers * 1000000;
      result.innerHTML = kilometers + ' kilometers is equal to ' + convertedValue + ' millimeters.';
      break;
    case 'ft':
      convertedValue = kilometers * 3280.84;
      result.innerHTML = kilometers + ' kilometers is equal to ' + convertedValue + ' feet.';
      break;
    case 'in':
      convertedValue = kilometers * 39370.1;
      result.innerHTML = kilometers + ' kilometers is equal to ' + convertedValue + ' inches.';
      break;
    default:
      result.innerHTML = 'Please select a unit to convert to.';
  }
}
