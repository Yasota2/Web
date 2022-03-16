'use strict';


const outputTextElement = document.querySelector("[data-output]");
const generateButton = document.querySelector("[data-generate-pass]");
let numericArray = []
let password = "" ;


function generatePassword(){

    for ( let i = 0 ; i <= 18-1 ; i++){

        numericArray[i] = Math.floor( Math.random() * (127-32) +32 );
        password = password + String.fromCharCode(numericArray[i]);
    }
    return password;
}


function updateDisplay(){
    outputTextElement.innerHTML = password;
}


function clear(){
    password = ""
    outputTextElement.innerHTML = ' ';
}



generateButton.addEventListener('click', button =>{

    if (outputTextElement.innerHTML != " "){
        clear();
    }
    generatePassword();
    updateDisplay()


})


