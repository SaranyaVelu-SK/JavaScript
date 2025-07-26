function validatePalindrome(str) {
    // Your implementation

    str = str.toLowerCase();
    let l = 0;
    let r = str.length - 1;
    while (l < r) {
        if (!str[l].match(/[a-z0-9]/i)) {
            l++;
        } else if (!str[r].match(/[a-z0-9]/i)) {
            r--;
        } else if (str[l] === str[r]) {
            l++;
            r--
        } else {
            return false
        }
    }
    return true
}

//For the purpose of user debugging.
validatePalindrome("race a car");