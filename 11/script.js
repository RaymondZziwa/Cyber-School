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