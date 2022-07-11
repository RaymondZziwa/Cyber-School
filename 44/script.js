const arr = ['Click on the water bottle to pour water into the clean container','Get a second container and click on the bottle of mercury to pour the mercury into the new container','Get 2 pairs of different size tubes.Click on the tubes to place them in the 2 different containers','State what you have observed.']
let x = 0
let i = 1;
const qtnText = document.getElementById("qtntext");
const space = document.getElementById("lab")
qtnText.innerHTML = arr[x]
 const pic = document.createElement("img");
  const pic2 = document.createElement("img");
 pic.classList.add("createdimg")
 pic.src = "imgs/1.png"
space.append(pic)


const change = () =>{
	i++
	x++
	qtnText.innerHTML = arr[x]
	pic.src = `imgs/${i}.png`
	if(i == 4){
		pic.removeEventListener('click',change)
	}
}

pic.addEventListener('click',change)


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