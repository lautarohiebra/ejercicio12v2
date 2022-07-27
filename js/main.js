console.log(document.querySelector('title').innerText)

/* Datos Integrante 1 */

let int1n1 = document.querySelector('#primerIntegrante--primerNombre').innerText
let int1n2 = document.querySelector('#primerIntegrante--segundoNombre').innerText
let int1a1 = document.querySelector('#primerIntegrante--primerApellido').innerText
let int1a2 = document.querySelector('#primerIntegrante--segundoApellido').innerText

/* Datos Integrante 2 */

let int2n1 = document.querySelector('#segundoIntegrante--primerNombre').innerText
let int2n2 = document.querySelector('#segundoIntegrante--segundoNombre').innerText
let int2a1 = document.querySelector('#segundoIntegrante--primerApellido').innerText
let int2a2 = document.querySelector('#segundoIntegrante--segundoApellido').innerText

//-------------------
// Espaciado de Datos
//-------------------

/* ***Integrante 1*** */

if (int1n2==="") {
    int1n2=" "
} else {
    int1n2=" "+int1n2+" "
}

if (int1a2==="") {
    int1a2=""
} else {
    int1a2=" "+int1a2
} 

/* ***Integrante 2*** */

if (int2n2==="") {
    int2n2=" "
} else {
    int2n2=" "+int2n2+" "
}

if (int2a2==="") {
    int2a2=""
} else {
    int2a2=" "+int2a2
}


const stringLogInt1 = int1n1 + int1n2 + int1a1.toUpperCase()+ int1a2.toUpperCase()
/* console.log(stringLogInt1) */

const stringLogInt2 = int2n1 + int2n2 + int2a1.toUpperCase()+ int2a2.toUpperCase()
/* console.log(stringLogInt2) */

console.log(
"---\n"+
"Integrante 1: "+'"'+ stringLogInt1+'"\n'+
"Integrante 2: "+'"'+ stringLogInt2+'"\n'+
"---\n")


let arrayNombre=document.getElementsByClassName('nombre');

let a=0;

for (var i=0;i<(arrayNombre.length-1);i++){

    for (var j=i+1;j<arrayNombre.length;j++){

        if ((arrayNombre[i].textContent === arrayNombre[j].textContent)&& arrayNombre[i].textContent!==''){
            console.log('Hay coincidencias en los nombres de los integrantes')
            colornombre = window.prompt('Hubo coincidencias en nombres, ingrese un color para identificarlos');
            arrayNombre[i].style.color=colornombre;
            arrayNombre[j].style.color=colornombre;
    
        } else {
            a+=1;
        }
    }
}

let b=0;

for (var i=1;i<arrayNombre.length;i++){
    b+=arrayNombre.length-i;
}

if (a==b){
    console.log('No hay coincidencias en los nombres de los integrantes');
}





let arrayApellido=document.getElementsByClassName('apellido');

let c=0;

if (window.confirm('Desea comparar los apellidos para encontrar coincidencias')){

    for (var i=0;i<(arrayApellido.length-1);i++){
        
        for (var j=i+1;j<arrayApellido.length;j++){
            
            if ((arrayApellido[i].textContent === arrayApellido[j].textContent) && arrayApellido[i].textContent!==''){
                console.log('Hay coincidencias en los apellidos de los integrantes')
                colorapellido = window.prompt('Hubo coincidencias en apellidos, ingrese un color para identificarlos');
                arrayApellido[i].style.color=colorapellido;
                arrayApellido[j].style.color=colorapellido;
    
        } else {
            c+=1;
        }
    }
}

let d=0;

for (var i=1;i<arrayApellido.length;i++){
    d+=arrayApellido.length-i;
}

if (c==d){
    console.log('No hay coincidencias en los apellidos de los integrantes');
}
}
