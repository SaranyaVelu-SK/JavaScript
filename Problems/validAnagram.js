function isAnagram(str1, str2) {
    // Your implementation
    str1 = str1.toLowerCase().replace(/[^a-z]/g, "");
    str2 = str2.toLowerCase().replace(/[^a-z]/g, "");
    if (str1.length !== str2.length) return false;
    let map = {};
    for (let x = 0; x < str1.length; x++){
        if (!map[str1[x]]) {
            map[str1[x]]=1
        } else {
            map[str1[x]]++;
        }
    }

    for (let k = 0; k < str2.length; k++){
        if (!map[str2[k]] || map[str2[k]] < 0) {
            return false
        } else {
            map[str2[k]]--;
        }
    }
 return true
}

//For the purpose of user debugging.
isAnagram("listen", "silent");