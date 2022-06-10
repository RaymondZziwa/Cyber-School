const draggables = document.querySelectorAll('.option');
let not = document.getElementById("status")
let i = 1;
let count =0;
const dropZone = document.getElementById("dropzone");
const orig = document.getElementById("dropZone2");
let data;


const reset = ()=>{
    location.reload();
}


const drag = (event) => {
    console.log("drag started")
    event.dataTransfer.setData("text",event.target.id)
}


const ondragOver = (event)=>{
    event.preventDefault();
}


const drop = (event) =>{
    event.preventDefault();
    data = event.dataTransfer.getData("text")
    event.target.append(document.getElementById(data))
    event.target.lastElementChild.removeAttribute("draggable")
    console.log(event.target)
    console.log("dropped")



    let clone = document.getElementById(data).cloneNode(true);
    clone.id = data;
    clone.classList.add('option')
    clone.setAttribute('draggable','true')
    clone.setAttribute('ondragstart','drag(event)')
    document.getElementById("dropZone2").append(clone)
}





const check = () =>{
    count++;
    if( document.getElementById("vid").src.indexOf("imgs/1.mp4")!=-1 && data == "buoyant"){
        const img = document.createElement('img') // create img element on the fly
        img.src = 'imgs/excel.png' //assign source to new img element
        img.classList.add("imgo");//add styling class
        not.innerHTML = "" //clear any appended elements inside the div
        not.append(img);  // append excellent image
       // document.getElementById("imgqtn").src="imgs/2.png";
       // document.getElementById("status").style.visibility="hidden";

    }else if ( document.getElementById("vid").src.indexOf("imgs/2.mp4")!=-1 && data == "friction"){
        const img = document.createElement('img') // create img element on the fly
        img.src = 'imgs/excel.png' //assign source to new img element
        img.classList.add("imgo");//add styling class
        not.innerHTML = "" //clear any appended elements inside the div
        not.append(img);  // append excellent image

    }else if ( document.getElementById("vid").src.indexOf("imgs/3.mp4")!=-1 && data == "mag"){
        const img = document.createElement('img') // create img element on the fly
        img.src = 'imgs/excel.png' //assign source to new img element
        img.classList.add("imgo");//add styling class
        not.innerHTML = "" //clear any appended elements inside the div
        not.append(img);  // append excellent image
    }else if ( document.getElementById("vid").src.indexOf("imgs/4.mp4")!=-1 && data == "tension"){
        const img = document.createElement('img') // create img element on the fly
         img.src = 'imgs/excel.png' //assign source to new img element
         img.classList.add("imgo");//add styling class
         not.innerHTML = "" //clear any appended elements inside the div
         not.append(img);  // append excellent image

     }


    // else if(document.getElementById("vid").src.indexOf("imgs/3.mp4")!=-1 && data == "matter"){
    //     const img = document.createElement('img') // create img element on the fly
    //     img.src = 'imgs/excel.png' //assign source to new img element
    //     img.classList.add("imgo");//add styling class
    //     not.innerHTML = "" //clear any appended elements inside the div
    //     not.append(img);  // append excellent image
    //    dropZone.removeChild(document.getElementById(data))
    //    setTimeout(changed,1500)
    // }
    else{
        const img = document.createElement('img') // create img element on the fly
        img.src = 'imgs/sorry.png' //assign source to new img element
        img.classList.add("imgo");//add styling class
        not.innerHTML = "" //clear any appended elements inside the div
        not.append(img);
        dropZone.removeChild(document.getElementById(data))

    }




    if(count == 3 && document.getElementById("vid").src.indexOf("imgs/1.mp4")!=-1){
      dropZone.append(document.getElementById('buoyant'))
      const img = document.createElement('img') // create img element on the fly
      img.src = 'imgs/excel.png' //assign source to new img element
      img.classList.add("imgo");//add styling class
      not.innerHTML = "" //clear any appended elements inside the div
      not.append(img);
  }else if(count == 3 && document.getElementById("vid").src.indexOf("imgs/2.mp4")!=-1){
    dropZone.append(document.getElementById('friction'))
    const img = document.createElement('img') // create img element on the fly
    img.src = 'imgs/excel.png' //assign source to new img element
    img.classList.add("imgo");//add styling class
    not.innerHTML = "" //clear any appended elements inside the div
    not.append(img);
  }else if(count == 3 && document.getElementById("vid").src.indexOf("imgs/3.mp4")!=-1){
    dropZone.append(document.getElementById('mag'))
    const img = document.createElement('img') // create img element on the fly
    img.src = 'imgs/excel.png' //assign source to new img element
    img.classList.add("imgo");//add styling class
    not.innerHTML = "" //clear any appended elements inside the div
    not.append(img);
  }else if(count == 3 && document.getElementById("vid").src.indexOf("imgs/4.mp4")!=-1){
    dropZone.append(document.getElementById('tension'))
    const img = document.createElement('img') // create img element on the fly
    img.src = 'imgs/excel.png' //assign source to new img element
    img.classList.add("imgo");//add styling class
    not.innerHTML = "" //clear any appended elements inside the div
    not.append(img);
}
}




const next = () =>{
      if(i<4){
          i++
      }
      document.getElementById("vid").src = `imgs/${i}.mp4`;
      not.innerHTML = ""
      dropZone.removeChild(document.getElementById(data))
      count =0;
}


const previous = () =>{
      if(i>1){
          i--
      }
      document.getElementById("vid").src = `imgs/${i}.mp4`;
      not.innerHTML = ""
      dropZone.removeChild(document.getElementById(data))
      count =0
}


const disp = () =>{
      if(document.getElementById("vid").src.indexOf("imgs/1.mp4")!=-1){
          document.getElementById('previous').style.visibility = "hidden"
      }
    if(document.getElementById("vid").src.indexOf("imgs/4.mp4")!=-1){
         document.getElementById('next').style.visibility = "hidden"
     }
     if(document.getElementById("vid").src.indexOf("imgs/3.mp4")!=-1 || document.getElementById("vid").src.indexOf("imgs/2.mp4")!=-1){
        document.getElementById('previous').style.visibility = "visible"
        document.getElementById('next').style.visibility = "visible"
     }

}

setInterval(disp,100)