let modalBg = document.querySelector('.modal-bg');
let modalClose = document.querySelector('.modal-close');
let mdContent = document.querySelector('#md-content');
const slide = () => {
  let ballSize = document.querySelector('.ball');
  let sliderValue = document.getElementById("myRange").value;
  let stickProps = document.querySelector('.stick');
  if(sliderValue >2 && sliderValue < 5){
    ballSize.style.width = "90%";
    ballSize.style.height = "15rem";
    ballSize.style.position = "absolute";
    stickProps.style.display = "none";
  }
  else if(sliderValue >= 5 && sliderValue < 8){
    ballSize.style.width = "70%";
    ballSize.style.height = "12rem";
    ballSize.style.position = "absolute";
    stickProps.style.display = "none";
  }
  else if(sliderValue >= 8){
    ballSize.style.width = "50%";
    ballSize.style.height = "10rem";
    ballSize.style.position = "absolute";
    stickProps.style.display = "none";
  }else{
    ballSize.style.width = "100%";
    ballSize.style.height = "20rem";
    ballSize.style.position = "absolute";
    stickProps.style.display = "inline-block";
  }
}

let textAnswer = document.querySelector('.ansinput').value;

const checkAns = () => {
  if(textAnswer == null){
    document.querySelector('#check').disabled = true;
  }else{
    let correctAnswer = document.querySelector('.correctAnswer');
    const ans = "The air inside the ballon slowly escapes through the tiny spaces between the rubber particles causing reduction in size of the ballon";
    console.log(textAnswer);
    correctAnswer.innerHTML=ans;
  }
}
/*
let modalBg = document.querySelector('.modal-bg');
let modalClose = document.querySelector('.modal-close');
let mdContent = document.querySelector('#md-content');
var imgCorrect = document.createElement("img");
imgCorrect.src = "/imgs/accept.png";
const correct = () => {
   modalBg.classList.add('bg-active');
   modalClose.addEventListener('click', function(){
     modalBg.classList.remove('bg-active');  
   });
   mdContent.appendChild(imgCorrect);
   mdContent.innerHTML = "Excellent";
}


const wrong = () => {
    modalBg.classList.add('bg-active');
   modalClose.addEventListener('click', function(){
     modalBg.classList.remove('bg-active');  
   });
   mdContent.innerHTML = "Try again"; 
}*/