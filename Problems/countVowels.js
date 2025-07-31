function countVowels(str) {
    // Your implementation
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (vowels.has(str[i])) {
            count++
        }
    }
    return count;

}

//For the purpose of user debugging.
countVowels("bcd");