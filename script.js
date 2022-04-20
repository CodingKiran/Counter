const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const num = document.getElementById("numbers");

let count = 0;

increase.addEventListener("click", () => {
  count++;
  num.textContent = count;
});

reset.addEventListener("click", () => {
  count = 0;
  num.textContent = count;
});

decrease.addEventListener("click", () => {
  count--;
  num.textContent = count;
});
