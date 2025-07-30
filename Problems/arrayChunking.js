function chunkArray(arr, n) {
    let i = 0;
    let final = [];

    while (i < arr.length) {
        let subArr = [];
        while (subArr.length < n) {
            if (arr[i]) {
                subArr.push(arr[i]);            
            } else {
                break
            }
            i++;
        }
        
        final.push(subArr)
    }
    return final
}

//For the purpose of user debugging.
//pass your array and chunk size in function call
chunkArray([1, 2, 3,4], 2);