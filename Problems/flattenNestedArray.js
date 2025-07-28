function flattenArray(array) {
    // Your implementation
    let arr1 = [];
    function flat(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                flat(arr[i])
            } else {
                arr1.push(arr[i])
            }
        }
    }
    flat(array);
    return arr1;
}