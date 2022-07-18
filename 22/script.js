const reset = () => location.reload();

// const next = () =>{

// }

const clicked = (clicked_id) => {

    if(clicked_id == "heat"){
        document.getElementById(clicked_id).classList.add('correct')
        const img = document.createElement('img')
        img.src = 'imgs/excel.png' //assign source to new img element
        img.classList.add("imgo");//add styling class
        document.getElementById("status").innerHTML = "" //clear any appended elements inside the div
        document.getElementById("status").append(img); 
    }else{
        document.getElementById(clicked_id).classList.add('wrong')
        const img = document.createElement('img')
        img.src = 'imgs/sorry.png' //assign source to new img element
        img.classList.add("imgo");//add styling class
        document.getElementById("status").innerHTML = "" //clear any appended elements inside the div
        document.getElementById("status").append(img); 
    }
}

const previous = () => {
    document.getElementById('st2').style.display = "none"
    document.getElementById('pt2').style.display = "none"
    document.getElementById('qtn1').style.display="block"
    document.getElementById('prev_btn').style.display = "none"
    document.getElementById('next_btn').style.display = " inline-block"
}

const next = () => {
    document.getElementById('st2').style.display = "block"
    document.getElementById('pt2').style.display = "block"
    document.getElementById('qtn1').style.display="none"
    document.getElementById('prev_btn').style.display = "inline-block"
    document.getElementById('next_btn').style.display = "none"
}

const display_check = () =>{
    if(document.getElementById("input1").value != "" && document.getElementById("input2").value != "" ){
        document.getElementById("check_btn").style.display="block"
    }else{
        document.getElementById("check_btn").style.display="none"
    }
}


setInterval(display_check,500);

const check = () =>{
    document.getElementById("ans1").style.display = "block";
    document.getElementById("ans2").style.display = "block";
}