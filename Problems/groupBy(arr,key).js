function groupBy(arr, key) {
    // Your implementation

    let map = {};
    for (let i = 0; i < arr.length; i++){
        if (!map[arr[i][key]]) {
            map[arr[i][key]] =[arr[i]]
        } else {
            map[arr[i][key]].push(arr[i])
        }
    }
    return map;
}
groupBy([
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
],'age');