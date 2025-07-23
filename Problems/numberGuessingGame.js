const minNum =1;
const maxNum = 100;

let generatedNum = Math.floor(Math.random()*(maxNum-minNum +1)) +minNum;


let attempts =0;
let guess;
let playing =true;

while(playing){
    guess =window.prompt(`Guess a number between ${minNum} - ${maxNum}`);

    if(isNaN(guess)){
        window.alert("Enter a valid number")
    }else if(guess>maxNum || guess<minNum){
        window.alert("Enter a valid number")
    }else{
        attempts++;
        if(guess >generatedNum){
            window.alert("Entered value is too high! Try Again")
        }else  if(guess<generatedNum){
            window.alert("Entered value is too Low! Try Again")
        }else{
            window.alert(`Hurray! The answer was ${generatedNum} and you have find it in ${attempts} attempts`);
            playing=false;
        }
    }
}