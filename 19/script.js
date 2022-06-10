
let not = document.getElementById("status");
const check = () =>{
	 if( document.getElementById("ans1").value == "water piston" || document.getElementById("ans1").value == "Water piston" || document.getElementById("ans1").value == "Water Piston"){
        const img = document.createElement('img') // create img element on the fly
        img.src = 'imgs/excel.png' //assign source to new img element
        img.classList.add("imgo");//add styling class
        not.innerHTML = "" //clear any appended elements inside the div
        not.append(img);  // append excellent image

        // setTimeout(changed,1500)
       // document.getElementById("imgqtn").src="imgs/2.png";
       // document.getElementById("status").style.visibility="hidden";
    }else{
    	const img = document.createElement('img') // create img element on the fly
        img.src = 'imgs/sorry.png' //assign source to new img element
        img.classList.add("imgo");//add styling class
        not.innerHTML = "" //clear any appended elements inside the div
        not.append(img);  // append excellent image
    }
    
}


 const display_check = () =>{
     if(document.getElementById("ans1").value != ""){
         document.getElementById("check_btn").style.visibility="visible"
     }else{
         document.getElementById("check_btn").style.visibility="hidden"
     }
 }


 setInterval(display_check,500);


const reset = () =>{
	location.reload()
}