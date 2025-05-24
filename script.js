function appendValue(val) {
  document.getElementById('display').value += val;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculateResult() {
  try {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch {
    document.getElementById('display').value = 'Error';
  }
}