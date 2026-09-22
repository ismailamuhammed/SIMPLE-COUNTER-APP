let count = 0;

const display = document.getElementById('display');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

function render() {
  display.textContent = count;
}

incrementBtn.addEventListener('click', function () {
  count = count + 1;
  render();
});

decrementBtn.addEventListener('click', function () {
  count = count - 1;
  render();
});

resetBtn.addEventListener('click', function () {
  count = 0;
  render();
});

render();
