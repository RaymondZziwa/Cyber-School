const arr = ['Rub both ballons with a piece of wool and state what was observed']
let x = 0
let i = 1;
const qtnText = document.getElementById("qtntext");
const space = document.getElementById("lab")
qtnText.innerHTML = arr[x]
 const pic = document.createElement("img");
  const pic2 = document.createElement("img");
 pic.classList.add("createdimg")
 pic.src = `imgs/p${i}.png`
space.append(pic)


// const change = () =>{
// 	i++
// 	x++
// 	qtnText.innerHTML = arr[x]
// 	pic.src = `imgs/${i}.png`
// 	document.getElementById('wool').style.display='inline-block'
// 	if(i == 4){
// 		pic.removeEventListener('click',change)
// 	}
// }

// pic.addEventListener('click',change)


 const check = () =>{
 	document.getElementById('ans').style.visibility = "visible"
 }


 const display_check = () =>{
 	if(document.getElementById('ans1').value!=""){
 		document.getElementById('check').style.display = "inline-block"
 	}else{
 		document.getElementById('check').style.display = "none"
 	}
 }


setInterval(display_check,500)



window.onload = addListeners();

function addListeners(){
	document.getElementById('wool').addEventListener('mousedown', mouseDown, false);
	window.addEventListener('mouseup', mouseUp, false);

}

function mouseUp(e)
{
	window.removeEventListener('mousemove', divMove, true);
	
}
let timeout;
function mouseDown(e){
  window.addEventListener('mousemove', divMove, true);
   timeout = setTimeout(next,5000)
}

function divMove(e){
var div = document.getElementById('wool');
  div.style.position = 'absolute';
  div.style.top = e.clientY + 'px';
  div.style.left = e.clientX + 'px';
}

const next = () =>{
	i++
	document.getElementById('wool').style.display='none'
	pic.classList.add("createdimg")
	pic.src = `imgs/p${i}.png`
	if(i == 2){
		clearTimeout(timeout)
	}
}
