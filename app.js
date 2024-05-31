'user strict';

const decreaseBtn = document.getElementById('decreasebtn');
const increaseBtn = document.getElementById('increasebtn');
const resetBtn = document.getElementById('resetbtn');
const countLabel = document.getElementById('countLabel');

let count = 0;

// *increase
increaseBtn.onclick = function(){
  count++;
  countLabel.textContent = count;
}
// *decrease
decreaseBtn.onclick = function (){
  count--;
  countLabel.textContent = count;
}

// *reset
resetBtn.onclick = function(){
  count = 0;
  countLabel.textContent = count;
}
