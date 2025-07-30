//each word is reversed but the order of words is maintained
function reverseWords(sentence) {
    // Your implementation

    function reverseWord(word) {
        let arr = word.split("")
        let n = arr.length;
        let mid = Math.floor(n / 2);
        for (let i = 0; i < mid; i++){
            let temp = arr[i];
            arr[i] = arr[n - i - 1];
            arr[n - i - 1] = temp;
        }
        return arr.join("")
    }

    let newStr = sentence.split(" ").map((word) => reverseWord(word)).join(" ");
    return newStr;
}

//For the purpose of user debugging.
reverseWords("Hello World");