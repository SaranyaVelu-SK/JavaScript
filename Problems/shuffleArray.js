//Fisher-Yates Algorithm
const shuffleArray = (arr) =>{
    for(let i=arr.length-1;i>0;i--){
        let randomIndex = Math.floor(Math.random()*(i+1));
        // console.log(i,randomIndex);
        [arr[i],arr[randomIndex]] = [arr[randomIndex],arr[i]]
    }
    return arr;
}

let cards =['A',2,3,4,5,6,7,8,9,10,'K','Q','J'];
