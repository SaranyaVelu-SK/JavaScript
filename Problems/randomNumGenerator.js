const generatorBtn =  document.getElementById("generator");

const myLabel = document.getElementById("randNum");

const min=1;
const max =3;

let newNumber;

generatorBtn.onclick = function(){
    newNumber  = Math.floor(Math.random()*(max-min +1)) +min;
    myLabel.textContent = newNumber;
}