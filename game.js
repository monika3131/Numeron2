var num1 = Math.round(Math.random() * 100);
const num1box = document.getElementById("number1");

var num2 = Math.round(Math.random() * 100);
const num2box = document.getElementById("number2");

var oper;
var score = 0;
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const mulBtn = document.getElementById("mul");
const divideBtn = document.getElementById("divide");
const modulusBtn = document.getElementById("modulus");

var num3box = document.getElementById("number3");
var num3;

function randomise() {
  num1 = Math.round(Math.random() * 100);
  num2 = Math.round(Math.random() * 100);

  if (num1 < num2) {
    var extra = num1;
    num1 = num2;
    num2 = extra;
  }

  oper = Math.round(Math.random() * 5);
  switch (oper) {
    case 1:
      num3 = num1 + num2;
      break;

    case 2:
      num3 = num1 - num2;
      break;

    case 3:
      num3 = num1 * num2;
      break;

    case 4:
      num3 = Math.floor(num1 / num2);
      break;

    case 5:
      num3 = num1 % num2;
      break;

    case 0:
      randomise();
  }

  num1box.innerHTML = num1;
  num2box.innerHTML = num2;
  num3box.innerHTML = num3;

  console.log(num1 + " " + num2 + " " + num3 + " " + oper);
}

randomise();

plusBtn.onclick = () => {
  if (num1 + num2 === num3) {
    score++;
    randomise();
    resetTimer(timerId);
  } else {
    location.href = "gameover.html?score=" + score;
  }
};

minusBtn.onclick = () => {
  if (num1 - num2 === num3) {
    score++;
    randomise();
    resetTimer(timerId);
  } else {
    location.href = "gameover.html?score=" + score;
  }
};

mulBtn.onclick = () => {
  if (num1 * num2 === num3) {
    score++;
    randomise();
    resetTimer(timerId);
  } else {
    location.href = "gameover.html?score=" + score;
  }
};

divideBtn.onclick = () => {
  if (Math.floor(num1 / num2) === num3) {
    score++;
    randomise();
    resetTimer(timerId);
  } else {
    location.href = "gameover.html?score=" + score;
  }
};

modulusBtn.onclick = () => {
  if (num1 % num2 === num3) {
    score++;
    randomise();
    resetTimer(timerId);
  } else {
    location.href = "gameover.html?score=" + score;
  }
};

var time = 20;
var timerId;

function startTimer() {
  time = 20;
  timer.innerHTML = time;
  timerId = setInterval(() => {
    time--;
    if (time == 0) location.href = "./gameover.html?score=" + score;
    timer.innerHTML = time;
  }, 1000);
}

function resetTimer(intervalId) {
  clearInterval(intervalId);
  startTimer();
}

startTimer();
