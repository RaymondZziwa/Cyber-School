
let rightAns = document.querySelector('.review');
let wrongAns = document.querySelector('.Tryagain');
let next = document.querySelector('.proceed');
let op1 = document.getElementById('option1');
let op2 = document.getElementById('option2');

const correct = () => {
    rightAns.style.visibility = 'visible';
    op1.style.backgroundImage = 'linear-gradient(#61686b,#61686b)';
    op2.style.visibility = 'hidden';
    wrongAns.style.visibility = 'hidden';
    next.style.visibility='visible';
}

const wrong = () => {
  wrongAns.style.visibility = 'visible';
}

const forward = () => {
  location.href="Qn2.html";
}