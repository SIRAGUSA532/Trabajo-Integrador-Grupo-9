//Aca amos a dar las instrucciones para que se mueva el boton dentro de la botonera//
var toggle= document.querySelector(".toggle")
var body=document.body

toggle.addEventListener("click",()=>{
  if (toggle.style.right=="auto"){
    //DARK MODE//
    body.style.backgroundColor="black"
    body.style.color="White"
    toggle.style.right="5px"
    toggle.style.left="auto"
  
  }else {
    //LIGTH MODE//
    body.style.backgroundColor="white"
    body.style.color="black"
    toggle.style.right="auto"
    toggle.style.left="5px"
  }


})
