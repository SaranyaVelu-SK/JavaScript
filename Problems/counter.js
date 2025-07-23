const countLabel = document.getElementById("countLabel");
const increaseButton =document.getElementById("increaseBtn");
const resetButton = document.getElementById("resetBtn");
const decreaseButton = document.getElementById("decreaseBtn");
const container = document.getElementById("container")

let count = 0;

increaseButton.addEventListener("mouseover",()=>{
    count++ ;
    countLabel.innerText=count;
    console.log("increase")
})
resetButton.addEventListener("click",()=>{
    count = 0;
    countLabel.innerText=count;
    console.log("reset")
})
decreaseButton.addEventListener("click",()=>{
    count-- ;
    countLabel.innerText=count;
    console.log("decrease")
})

container.addEventListener("mouseover",()=>{
   console.log("bubble")
})

//function
function makeCounter(initialValue = 0) {
    // Your implementation
    let count = initialValue
    const counterObj = {
        increment: () => {
            count++
            return count;
        },
        decrement: () => {
            count--
            return count
        },
        reset: () => {
            count = initialValue
            return count;
        }
    }
 return counterObj
}
