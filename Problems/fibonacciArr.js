
//generateFibonacci(n) outputs an array of Fibonacci numbers from F(n) down to F(0).

function generateFibonacci(n) {
    
    let arr = [];
    function fibb(x) {
        if (x == 0) return 0;
        if (x == 1) return 1;
        return fibb(x-1)+fibb(x-2)
    }
   for(let i=0;i<=n;n++){
    arr.push(fibb(i))
   }
    console.log(arr)
    return arr; 
}