var btns = [];
var txt_password;
var btn_reset;
var numeros = [0,1,2,3,4,5,6,7,8,9];

window.onload = inicio;

function inicio(){
    console.log('Documento cargado')
    VariablesDOM();
    RevolverBotones();
    Eventos();
    
}

function VariablesDOM(){
    txt_password = document.getElementById("passwordtxt");
    btn_reset = document.getElementById("erase");
    //Botones del DOM
    btns.push(document.getElementById("0"));
    btns.push(document.getElementById("1"));
    btns.push(document.getElementById("2"));
    btns.push(document.getElementById("3"));
    btns.push(document.getElementById("4"));
    btns.push(document.getElementById("5"));
    btns.push(document.getElementById("6"));
    btns.push(document.getElementById("7"));
    btns.push(document.getElementById("8"));
    btns.push(document.getElementById("9"));
}

function Eventos(){

    for (const key in btns){

        btns[key].addEventListener("click", procesarEventoClick);
        btns[key].addEventListener("mouseover", sobreBoton);
        btns[key].addEventListener("mouseout", saleBoton);
        
    }

        btn_reset.addEventListener("click", resetear);
}

function saleBoton(){

    var cont = 0;
    for (const key in btns){

        btns[key].value = numeros[cont];
        btns[key].id =  numeros[cont];
        cont++;
    }
}

function sobreBoton(){    

    for (const key in btns){

        btns[key].value = "*";
    }    
}

function resetear(){

    txt_password.value = "";
}

function procesarEventoClick(event){
    
    txt_password.value += event.target.id;
    console.log('oprimio '+event.target.id); 
    RevolverBotones();

}

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

function RevolverBotones(){

    numeros = shuffle(numeros);
    var cont = 0;
    for (const key in btns){

        btns[key].value = numeros[cont];
        btns[key].id =  numeros[cont];
        cont++;
        //console.log('Valor ' + btns[key].value);
        //console.log('id ' + btns[key].id);
    }
}