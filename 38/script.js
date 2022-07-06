const arr = ['Click on the paraffin bottle to pour it into the clean container','Click the lamp wick to place it in the container','State what you have observed.']
let x = 0
const qtnText = document.getElementById("qtntext");
const space = document.getElementById("lab")
qtnText.innerHTML = arr[x]
 const pic = document.createElement("img");
  const pic2 = document.createElement("img");
 pic.classList.add("createdimg")
 pic.src = "imgs/1.png"
space.append(pic)


const change = () =>{
	x++
	qtnText.innerHTML = arr[x]
	pic.src = "imgs/jar.png"
	pic.classList.remove("createdimg")
	pic2.src ="imgs/wic.png"
	pic2.classList.add('wic')
	pic2.setAttribute('draggable','true')
	space.append(pic2)
}

pic.addEventListener('click',change)

 const drag2 = () => {
 	x++
	qtnText.innerHTML = arr[x]
 	pic.src="imgs/5.png"
 	 pic.classList.add("createdimg")
 	 pic2.remove()
    pic.removeEventListener('click',change)
}


// const drop = (event) =>{
//     event.preventDefault();
//     data = event.dataTransfer.getData("text")
//     pic2.remove()
//     pic.src = "imgs/5.png"
// }

// pic.addEventListener('drop',drop)
pic2.addEventListener('click',drag2)


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