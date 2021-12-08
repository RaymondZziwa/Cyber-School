
const Slider = document.querySelector("#slid");

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
}

const checkAns = () => {
    if(Slider.value == 2){
      document.getElementById("imgs").src = "/imgs/p1.PNG";
    }else if(Slider.value == 4){
      document.getElementById("imgs").src = "/imgs/p2.PNG";
    }else if(Slider.value == 5){
      document.getElementById("imgs").src = "/imgs/p1.PNG";
    }else if(Slider.value == 7){
      document.getElementById("imgs").src = "/imgs/p3.PNG";
    }else{
      document.getElementById("imgs").src = "/imgs/p1.PNG";
    }
}