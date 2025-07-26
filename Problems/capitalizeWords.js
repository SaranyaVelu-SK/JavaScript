function capitalizeWords(sentence) {
    let newSentence = sentence.trim();

    if (newSentence) {
        return newSentence.split(/\s+/).map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");
    } else {
        return ""
    }
    
    
}

//For the purpose of user debugging.
capitalizeWords("hello world");