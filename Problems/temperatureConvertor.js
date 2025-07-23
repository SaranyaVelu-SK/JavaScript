
const userInput =document.getElementById("userInput");
const toCelcius = document.getElementById("toCelcius");
const toFahrenheit = document.getElementById("toFahrenheit");
const result = document.getElementById("result")

let temp;
const convert = () =>{
    if(toCelcius.checked){
        temp = Number(userInput.value);
        temp = (temp -32) * 5 /9;
        result.innerText = temp.toFixed(2) + "°C"
    }else if(toFahrenheit.checked){
        temp = Number(userInput.value);
        temp = (temp * 9/5) +32;
        result.innerText = temp.toFixed(2)+"°F"
    }else{
        result.innerText = "Select a conversion"
    }
}