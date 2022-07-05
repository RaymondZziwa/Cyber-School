
let clone,nodelist,data;
let op1 = document.getElementById("op1").id;
let op2 = document.getElementById("op2").id;
let op3 = document.getElementById("op3").id;
let op4 = document.getElementById("op4").id;
// const dropZone = document.querySelectorAll("#dz");
// const dropZone = document.getElementById(dz1)
let not1 = document.getElementById("imgstatus1")
let not2 = document.getElementById("imgstatus2")
let not3 = document.getElementById("imgstatus3")
let not4 = document.getElementById("imgstatus4")


const drag = (event) =>{
    event.dataTransfer.setData("text",event.target.id);
}

const dragOver =(event) =>{
    event.preventDefault();
}

const drop = (event) =>{
    event.preventDefault();
    data = event.dataTransfer.getData("text")
    const droppedElement = document.getElementById(data);

    // dropZone.forEach(element => {
    //     dropZone.appendChild(droppedElement);
    // });
  
    clone=event.target.cloneNode(true);
    nodelist=document.getElementById("parent").childNodes;
    for(let i=0;i<nodelist.length;i++)
    {
        if(nodelist[i].id==data)
        {
            dragindex=i;
        }
    }

    document.getElementById("parent").replaceChild(document.getElementById(data),event.target);

    document.getElementById("parent").insertBefore(clone,document.getElementById("parent").childNodes[dragindex]);
    
} 

const check = () =>{
    console.log(data,nodelist);

     if( op1 == nodelist[1].id){
         const img = document.createElement('img') // create img element on the fly
         img.src = 'imgs/excel.png' //assign source to new img element
         img.classList.add("imgo");//add styling class
         not1.innerHTML = "" //clear any appended elements inside the div
         not1.append(img);  // append excellent image
     }else{
      const img = document.createElement('img') // create img element on the fly
      img.src = 'imgs/sorry.png' //assign source to new img element
      img.classList.add("imgo");//add styling class
      not1.innerHTML = "" //clear any appended elements inside the div
      not1.append(img);  // append excellent image
     }

     if( op2 == nodelist[5].id){
         const img = document.createElement('img') // create img element on the fly
         img.src = 'imgs/excel.png' //assign source to new img element
         img.classList.add("imgo");//add styling class
         not2.innerHTML = "" //clear any appended elements inside the div
         not2.append(img);  // append excellent image
     }else{
         const img = document.createElement('img') // create img element on the fly
         img.src = 'imgs/sorry.png' //assign source to new img element
         img.classList.add("imgo");//add styling class
         not2.innerHTML = "" //clear any appended elements inside the div
         not2.append(img);  // append excellent image
     }
     
     if( op3 == nodelist[3].id){
         const img = document.createElement('img') // create img element on the fly
         img.src = 'imgs/excel.png' //assign source to new img element
         img.classList.add("imgo");//add styling class
         not3.innerHTML = "" //clear any appended elements inside the div
         not3.append(img);  // append excellent image
      }else{
         const img = document.createElement('img') // create img element on the fly
         img.src = 'imgs/sorry.png' //assign source to new img element
         img.classList.add("imgo");//add styling class
         not3.innerHTML = "" //clear any appended elements inside the div
         not3.append(img);  // append excellent image
     }
     if( op4 == nodelist[7].id){
      const img = document.createElement('img') // create img element on the fly
      img.src = 'imgs/excel.png' //assign source to new img element
      img.classList.add("imgo");//add styling class
      not4.innerHTML = "" //clear any appended elements inside the div
      not4.append(img);  // append excellent image
     }else{
      const img = document.createElement('img') // create img element on the fly
      img.src = 'imgs/sorry.png' //assign source to new img element
      img.classList.add("imgo");//add styling class
      not4.innerHTML = "" //clear any appended elements inside the div
      not4.append(img);  // append excellent image
     }
}
