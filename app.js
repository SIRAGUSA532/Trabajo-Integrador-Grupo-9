const nombre = document.getElementById("name")
const Email = document.getElementById("Email")
const desplegable = document.getElementById("desplegable")

// agregado por anibal

let selec =""
function escribir(){
    let nombre1 = document.getElementById('name1').value
    let apellido1 = document.getElementById("last").value
    let email1 = document.getElementById("email1").value
    let phone1 = document.getElementById("phone1").value
    document.getElementById("image").innerHTML='<img src="./imagenes/logo.png"/>'
    document.getElementById('ho').innerText = "Nombre: "+ nombre1 +"\n" + "Apellido: "+ apellido1 + "\n"+"E-mail: "+email1+"\n"+"Telefono: "+phone1+"\n"+"\n"+"Ha elegido que le proporcionemos informacion sobre: "+selec+ "\n"+ "\n"
    }

function cargarSeleccion1(){
    selec = document.getElementById("Ancla-Desatollo Web").innerText;
    console.log(selec);
}

function cargarSeleccion2(){
    selec = document.getElementById("Ancla Redes-Sociales").innerText;
    console.log(selec);
}

function cargarSeleccion3(){
    selec = document.getElementById("Ancla-Servicios Graficos").innerText;
    console.log(selec);
}

function imprimirElemento(){
    var ventana = window.open('', 'PRINT', 'height=600,width=800');
    ventana.document.write(imp1.innerHTML);
    ventana.document.close();
    ventana.focus();
    ventana.print();
    ventana.close();
    return true;
}

// agregado por anibal