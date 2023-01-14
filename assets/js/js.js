
//Cambia el rectangulo con el otro
function cambiar(numero) {
    var x = document.getElementById('rectangulo1');
    var y = document.getElementById('rectangulo2');

    x.style.display = "block";
    y.style.display = "none";

    //si x = block numero = 1 --- x = none y = block
    //si x = none numero = 0 --- x = block y = none
    if(x.style.display === "block" && numero == 1){
        x.style.display = "none";
        y.style.display = "block";
    }
    if(x.style.display === "none" && numero == 0){
        x.style.display = "block";
        y.style.display = "none";
    }        
}

//Envia la información al 2 rectangulo
function enviar(informacion){
    let input = document.getElementById("resultado")
    input.value = informacion
}

//Encripta lo escrito
function encriptador(){
    let texto = document.getElementById('texto').value
    let respuesta = ""

    for(let i = 0 ; i< texto.length; i++){
        letra = texto[i]
        switch(letra){
            case "a":
                respuesta += "ai"
                break;
            case "e":
                respuesta += "enter"
                break;
            case "i":
                respuesta += "imes"
                break;
            case "o":
                respuesta += "ober"
                break;
            case "u":
                respuesta += "ufat"
                break;
            default:
                respuesta += letra
        }
    } 

    if(respuesta.length > 0){
        cambiar(1)
        enviar(respuesta)
    }else{
        cambiar(0)
        enviar("")
    }
    
}

//Desencripta lo escritp
function desencriptador(){
    let texto = document.getElementById('texto').value
    let respuesta = ""

    for( let i = 0 ; i < texto.length ; i++ ){
        letra = texto[i]
        switch(letra){
            case "a":
                i = i + 1 //ai
                respuesta += "a"
                break;
            case "e":
                i = i + 4 //enter
                respuesta += "e"
                break;
            case "i":
                i = i + 3 //imes
                respuesta += "i"
                break;
            case "o":
                i = i + 3 //ober
                respuesta += "o"
                break;
            case "u":
                i = i + 3 //ufat
                respuesta += "u"
                break;
            default:
                respuesta += letra
        }
    } 

    if(respuesta.length > 0){
        cambiar(1)
        enviar(respuesta)
    }else{
        cambiar(0)
        enviar("")
    }
}


function copiar(){
    let  texto = document.getElementById("resultado").value;
    navigator.clipboard.writeText(texto)
    /*
    .then(() => {
        console.log('Text copied to clipboard');
    })
    .catch(err => {
        console.error('Error in copying text: ', err);
    });
    */
}
